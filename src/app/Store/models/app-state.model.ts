import {CommentsModel} from './comments.model';
import {PostsModel} from './posts.model';

export interface AppState{
  readonly post: Array<PostsModel>;
  readonly comment: Array<CommentsModel>;
}
