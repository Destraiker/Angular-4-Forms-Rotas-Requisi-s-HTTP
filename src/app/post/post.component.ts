import { Component, OnInit } from '@angular/core';
import { Post } from '../module/post/post.module';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';
import { User } from '../module/user/user.module';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post = {exibirComentario:false} as Post;
  posts: Post[];
  receber: any;
  receber2: any;

  users: User [];

  constructor(private servicePost: PostService,private serviceUser: UserService) { }

  exibirComentario(id){
    this.posts.forEach(post => {
      if(post.id==id){
        if(post.exibirComentario==true){
          post.exibirComentario=false;
        }else{
          post.exibirComentario=true;
        }
      }
    });
  }

  async ngOnInit() {
    this.receber = await this.servicePost.Get();
    this.posts = this.receber;
    this.receber2 = await this.serviceUser.Get();
    this.users = this.receber2;
  }
  async onSubmit(form) {
    console.log(form.value);
    let resposta =await this.servicePost.Post(form.value);
    if(resposta.ok==true){
      alert("Post publicado com suscesso.");
    }else{
      alert("Falha ao publicar o Post");
    }
  }

}
