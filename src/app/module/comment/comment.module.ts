import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommentModule { }

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
