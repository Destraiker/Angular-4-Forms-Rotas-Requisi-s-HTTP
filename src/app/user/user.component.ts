import { Component, OnInit } from '@angular/core';
import { User } from '../module/user/user.module';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  users: User [];
  receber: any;

  constructor(private service: UserService) { }

  async ngOnInit() {
    this.receber = await this.service.Get();
    this.users = this.receber;
  }

}
