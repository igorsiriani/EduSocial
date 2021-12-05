import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;

  constructor(private router: Router) { }

  login() {
    this.router.navigate(["home"]);
  }
  
  navigateRegister() {
    this.router.navigate(["register"]);
  }

  ngOnInit() {
  }

}
