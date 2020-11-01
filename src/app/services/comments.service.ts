import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentsModel } from '../Store/models/comments.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private DB_COMMENTS_URL = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getComment() {
    return this.http.get<Array<CommentsModel>>(this.DB_COMMENTS_URL).pipe(delay(600));
  }

  // tslint:disable-next-line:typedef
  addComment(comments: CommentsModel) {
    return this.http.post(this.DB_COMMENTS_URL, comments).pipe(delay(500));
  }

  // tslint:disable-next-line:typedef
  deleteComment(id: number) {
    return this.http.delete(`${this.DB_COMMENTS_URL}/${id}`).pipe(delay(500));
  }
}
