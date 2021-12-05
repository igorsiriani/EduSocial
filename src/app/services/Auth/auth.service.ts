import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { StorageService } from '../Storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private storage: StorageService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    let authInfo = {
      authenticated: false
    };

    this.storage.get('userId').then(
      result => {
        if (!result) {
          this.router.navigate(["login"]);
          return false;
        }
      }, err => {
        this.router.navigate(["login"]);
        return false;
      }
    ).catch(err => {
      this.router.navigate(["login"]);
      return false;
    });

    return true;
  }
}
