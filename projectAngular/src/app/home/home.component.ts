import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { RoleService } from './../_services/role.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: String = 'Home Page';
  isActive: boolean = true;
  isInActive: boolean = false;
  height: String = '100px';
  styleExpression = "width: 100px; height: 100px; background-color: red;";
  username = 'imed akrouti';
  roles: any = [];
  //emailAddress = '';
  constructor(
    public router: Router,
     public token: StorageService,
    public roleService: RoleService
  ) { }
  ngOnInit(): void {
    console.log(this.getRoles());
  }
  save() {

  }
  signOut() {
    //this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
  getRoles() {
    return this.roleService.getRoles().subscribe(
      (data) => {
        // this.token.saveDataToLocalhost(data);
        // this.isLoggedIn = true;
        this.roles = data;
        console.log(this.roles);
      },
      () => {
        //this.authState.setAuthState(true);
        //this.loginForm.reset();
        //this.router.navigate(['home']);
      }
    );
  }
}

