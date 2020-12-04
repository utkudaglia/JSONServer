import { Routes, RouterModule} from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {NewPostComponent} from './components/new-post/new-post.component';
import {AuthGuardService} from './services/Auth/auth-guard.service';

const arr = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: NewPostComponent},
  {path: 'post', component: PostsPageComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', redirectTo: ''},
];

export const routing = RouterModule.forRoot(arr);
