import {Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';

import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Post} from '../../Store/models/new-post.model';
import {first} from 'rxjs/operators';

import {AuthService} from '../../services/Auth/auth.service';
import {NewPostService} from '../../services/new-post/new-post.service';
import {AddPostAction} from '../../Store/actions/new-posts.actions';

import {Store} from '@ngrx/store';
import * as store from '../../Store';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new  EventEmitter();
  form: FormGroup;

  isOpen = false;

  constructor(
    private authService: AuthService,
    private postService: NewPostService,
    private appState$: Store<store.State>,
  ) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      body: new FormControl("", [
        Validators.required,
        Validators.minLength(10)
      ]),
    })
  }

  onSubmit(formData: Pick<Post, "title" | "body">): void{
    this.postService
      .createPost(formData, this.authService.userId)
      .pipe(first())
      .subscribe(() =>{
      this.create.emit(null);
    })
    this.appState$.dispatch(
      new AddPostAction(
        new Post(
        {
          postId: 0,
          title: formData.title,
          body: formData.body,
          user: this.authService.userId,
          created: Date,
        }
      )
    ))
    this.form.reset();
    this.formDirective.resetForm();
  }
}
