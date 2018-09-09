import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';










@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public pwdPattern = '^[a-z0-9A-Z_-]{6,12}$';
  public email: any = new FormControl('', [Validators.required, Validators.email]);
  public password: any = new FormControl('', [Validators.required, Validators.pattern(this.pwdPattern)]);
  public hide = true;
  public user: User;



  public ELEMENT_DATA: Array<User> = [];
  public displayedColumns: string[] = ['nom', 'prenom', 'username', 'email', 'edit', 'delete'];
  public dataSource;

  constructor() {
    this.user = new User();
    this.dataSource = this.ELEMENT_DATA;
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  submit() {
    this.ELEMENT_DATA.push(Object.assign({}, this.user) );
    this.dataSource = [...this.ELEMENT_DATA];
    console.log(this.dataSource);
  }
  edit(user) {
    console.log(user);
    this.user = user;
  }
  delete(user) {
    console.log(user);
    let index = this.ELEMENT_DATA.indexOf(user);
    this.ELEMENT_DATA.splice(index,1);
    this.dataSource = [...this.ELEMENT_DATA];

    console.log(index);
  }
}
