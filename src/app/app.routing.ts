import { Routes, RouterModule} from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import {AppComponent} from './app.component';

const arr = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PostsComponent},
  {path: 'post', component: PostsPageComponent},
];

export const routing = RouterModule.forRoot(arr);
