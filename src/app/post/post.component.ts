import { Component, OnInit } from '@angular/core';
import { Post } from '../module/post/post.module';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post = {} as Post;
  posts: Post[];
  receber: any;

  constructor(private service: PostService) { }

  async ngOnInit() {
    this.receber = await this.service.Get();
    this.posts = this.receber;
  }
  async onSubmit(form) {
    await this.service.Post(form);
  }

}
