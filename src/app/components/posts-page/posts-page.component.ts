import { Component, OnInit } from '@angular/core';
import {PostsPageHandler} from './posts-page.handler';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css'],
  providers: [PostsPageHandler],
})
export class PostsPageComponent implements OnInit {

  constructor(public postsPageHandler: PostsPageHandler) { }

  public ngOnInit(): void {
    this.postsPageHandler.init();
  }
}
