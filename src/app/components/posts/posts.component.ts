import { Component, OnInit } from '@angular/core';
import {PostsHandler} from './posts.handler';

// @ts-ignore
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsHandler]
})
export class PostsComponent implements OnInit {

  constructor(public postsHandler: PostsHandler) {}

  public ngOnInit(): void {
    this.postsHandler.init();
  }
}
