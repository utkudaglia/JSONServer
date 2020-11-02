import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { postReducer } from './Store/reducers/posts.reducer';
import { commentReducer } from './Store/reducers/comments.reducer';
import {PostEffects} from './Store/effects/post.effects';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {CommentEffects} from './Store/effects/comment.effects';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import {routing} from './app.routing';
import { HeaderComponent } from './header/header.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PostsPageComponent,
    PostsComponent,
    HeaderComponent
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
    FormsModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
