import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  errors: any = null;
  roles: string[] = [];
  isLoggedIn = false;
  isSignUpFailed = false;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: StorageService,
    //private authState: AuthStateService
  ) {


  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }
  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (data) => {
        this.token.saveDataToLocalhost(data.data);
        this.isLoggedIn = true;
        this.roles = this.token.getUser().roles;

      },
      (error) => {
        this.errors = error.error;
        this.isSignUpFailed = true;
        console.log(error);
      },
      () => {
        //this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['home']);
      }
    );
  }

}
