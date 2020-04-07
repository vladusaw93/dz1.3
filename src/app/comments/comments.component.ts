import {Component, Input, OnInit} from '@angular/core';
import {CommentsModel} from '../models/commentsModel';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  comments: CommentsModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
