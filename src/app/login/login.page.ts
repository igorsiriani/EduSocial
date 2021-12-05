import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/Storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;

  listUsers = [];

  constructor(private http: HttpClient, private router: Router, private storage: StorageService) { }

  login() {
    if (!this.email) {
      alert('E-mail é necessário');
    } else if(!this.password) {
      alert('Senha é necessário');
    } else {
      this.http
        .post('https://edu-social.herokuapp.com/api/auths', {
          email: this.email,
          password: this.password
        })
        .subscribe((response: any) => {
          console.log('response', response);
          this.getUserId();
        }, err => {
          this.getUserId();
        });
    }
  }

  getUserId() {
    this.http
      .get('https://edu-social.herokuapp.com/api/users')
      .subscribe(async (response: any) => {
        this.listUsers = response.data;
        console.log('this.listUsers.length', this.listUsers.length);
        
        for(var i = 0; i < this.listUsers.length; i++) { 
          if (this.listUsers[i].email === this.email) {
            this.storage.set('userId', i + 1);
            await this.sleep(500);
            this.router.navigate(["home"]);
            break;
          }

          if (i + 1 == this.listUsers.length){
            alert('E-mail ou Senha incorretos');
          }
        }
      });
  }
  
  navigateRegister() {
    this.router.navigate(["register"]);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnInit() {
  }

}
