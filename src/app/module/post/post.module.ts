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
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
