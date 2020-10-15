import {Comments} from './comments.model';
import {Posts} from './posts.model';

export interface AppState{
  readonly post: Array<Posts>;
  readonly comment: Array<Comments>;
}
