import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CommentsModel} from '../models/commentsModel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {

  }
  getComments(): Observable<CommentsModel[]>{
    return this.http.get<CommentsModel[]>(`https://jsonplaceholder.typicode.com/comments`);
  }
}

