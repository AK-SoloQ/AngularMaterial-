import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';







@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  public email: any = new FormControl('', [Validators.required, Validators.email]);
  public password: any = new FormControl('', [Validators.required, Validators.pattern(this.pwdPattern)]);
  public hide = true;
  public user: User;

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  submit() {
    console.log('bonjour');
    console.log(this.user)
  }
}
