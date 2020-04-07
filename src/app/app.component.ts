import {Component} from '@angular/core';
import {CommentsModel} from './models/commentsModel';
import {PostsModel} from './models/postsModel';
import {CommentService} from './services/comment.service';
import {PostsService} from './services/posts.service';

@Component({
  selector: 'app-root',
  template: `
    <app-posts *ngFor="let p of posts" [posts]="p"></app-posts>
    <app-comments *ngFor="let c of comments" [comments]="c"></app-comments>`,
  styles: [``],
})
export class AppComponent {
  comments: CommentsModel;
  posts: PostsModel;

  constructor(private commentServiec: CommentService, private postsService: PostsService) {
    this.commentServiec.getComments().subscribe(value => {
      this.comments = value;
    });
    this.postsService.getPosts().subscribe(value => {
      this.posts = value;
    });
  }
}
