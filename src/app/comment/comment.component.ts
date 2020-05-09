import { Component, OnInit, Input } from '@angular/core';
import {Comment} from '../module/comment/comment.module';
import {CommentService} from '../service/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  @Input() idPost;

  comment: Comment;
  comments: Comment [];
  receber:any;

  constructor(private service:CommentService) { }

  async ngOnInit(){
    this.receber= await this.service.GetById(this.idPost);
    this.comments=this.receber;
  }

}
