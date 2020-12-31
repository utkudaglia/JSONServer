import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError, first} from 'rxjs/operators';

import {ErrorHandlerService} from '../Error-Handler/error-handler.service';
import {User} from '../../Store/models/user.model';
import {Post} from '../../Store/models/new-post.model';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {
  private url = "http://localhost:3000/posts";

  httpOptions: { headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { }

  fetchAll(): Observable<Post[]>{
    return this.http
      .get<Post[]>(this.url, {responseType: "json"})
      .pipe(
        catchError(this.errorHandlerService.handleError<Post[]>("fetchAll", []))
      );
  }

  createPost(formData: Partial<Post>, userId: Pick<User, "id">): Observable<Post> {
    return this.http
      .post<Post>(
        this.url,
        { title: formData.title, body: formData.body, user: userId },
        this.httpOptions)
      .pipe(
        catchError(this.errorHandlerService.handleError<Post>("createPost"))
      );
  }

  deletePost(postId: Pick<Post, "id">): Observable<{}>{
    return this.http
      .delete<Post>(`${this.url}/${postId}`, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<Post>("deletePost"))
      );
  }
}
