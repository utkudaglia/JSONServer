
// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// @ts-ignore
import { EffectsModule } from '@ngrx/effects';
// @ts-ignore
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
// @ts-ignore
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// @ts-ignore
import { StoreModule } from '@ngrx/store';
// @ts-ignore
import { HttpClientModule } from '@angular/common/http';
import { postReducer } from './Store/reducers/posts.reducer';
import { commentReducer } from './Store/reducers/comments.reducer';
import {PostEffects} from './Store/effects/post.effects';
import { PostsPageComponent } from './posts-page/posts-page.component';
// @ts-ignore
import {MatButtonModule} from '@angular/material/button';
// @ts-ignore
import {MatInputModule} from '@angular/material/input';
// @ts-ignore
import {MatIconModule} from '@angular/material/icon';
import {CommentEffects} from './Store/effects/comment.effects';

import { FormsModule } from '@angular/forms';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PostsPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      posts: postReducer,
      comments: commentReducer
    }),
    EffectsModule.forRoot([PostEffects, CommentEffects]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
