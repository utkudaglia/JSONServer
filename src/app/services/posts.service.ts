import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Posts} from '../Store/models/posts.model';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private DB_POSTS_URL = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  getPost() {
    return this.http.get<Array<Posts>>(this.DB_POSTS_URL).pipe(delay(500));
  }

  // tslint:disable-next-line:typedef
  addShopping(postItem: Posts) {
    return this.http.post(this.DB_POSTS_URL, postItem).pipe(delay(500));
  }

  // tslint:disable-next-line:typedef
  deletePost(id: number){
    return this.http.delete(`${this.DB_POSTS_URL}/${id}`).pipe(delay(500));
  }

}

