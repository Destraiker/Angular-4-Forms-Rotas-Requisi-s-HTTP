import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class PostModule { }

export interface Post{
  userId: number;
  id: number;
  title: string;
  body: string;
  exibirComentario: boolean;
}
