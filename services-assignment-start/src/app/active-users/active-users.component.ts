import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../usersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];
  constructor(
    private usersService: UsersService,
  ) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id)
  }
}
