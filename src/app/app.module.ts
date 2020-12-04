import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { postReducer } from './Store/reducers/posts.reducer';
import { commentReducer } from './Store/reducers/comments.reducer';
import {PostEffects} from './Store/effects/post.effects';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {CommentEffects} from './Store/effects/comment.effects';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import {routing} from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { AuthInterceptorService } from './services/Auth/auth-interceptor.service';
import {CommonModule} from '@angular/common';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PostsPageComponent,
    PostsComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    NavigationComponent,
    NewPostComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      post: postReducer,
      comment: commentReducer
    }),
    EffectsModule.forRoot([PostEffects, CommentEffects]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
