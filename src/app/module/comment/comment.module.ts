import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommentModule { }

export interface Comment{
  userId: number;
  id: number;
  title: string;
  body: string;
}
