import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  first_name: string;
  last_name: string;
  birthday: string;
  phone: string;
  cpf: string;
  email: string;
  password: string;

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    if (!this.first_name) {
      alert('Nome é necessário');
    } else if (!this.last_name) {
      alert('Sobrenome é necessário');
    } else if (!this.birthday) {
      alert('Aniversário é necessário');
    } else if (!this.phone) {
      alert('Telefone é necessário');
    } else if (!this.cpf) {
      alert('CPF é necessário');
    } else if (!this.email) {
      alert('E-mail é necessário');
    } else if (!this.password) {
      alert('Senha é necessário');
    } else {
      this.http
        .post('https://edu-social.herokuapp.com/api/users', {
          first_name: this.first_name,
          last_name: this.last_name,
          cpf: this.cpf,
          email: this.email,
          birthday: this.birthday,
          phone: '',
          password_digest: '',
          gender: '',
          email_offers: '',
          cnpj: '',
          storage_key: '',
          storage_scope: '',
        })
        .subscribe((response: any) => {
          // this.postList = response.data;
          this.router.navigate(["login"]);
          console.log(response);
        });
    }
  }

  ngOnInit() {}
}
