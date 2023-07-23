import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  ForgotPassword!: FormGroup;
  errors: any = null;
  roles: string[] = [];

  constructor(public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: StorageService,) {


  }

  ngOnInit() {
    this.ForgotPassword = this.fb.group({
      email: [],
    });
  }

  onSubmit() {
    const email = this.ForgotPassword.value.email;
    this.authService.forgot(this.ForgotPassword.value.email).subscribe(
      (response) => {
        console.log(response);
        console.info(this.ForgotPassword.value);
      },
      (error) => {
        this.errors = error.error;
        //this.isSignUpFailed = true;
        console.log(error);
        console.info(this.ForgotPassword.value.email);
      },
      () => {
        //this.authState.setAuthState(true);
        this.ForgotPassword.reset();
        //this.router.navigate(['home']);
      }
    );
  }
}


function ngOnInit() {
  throw new Error('Function not implemented.');
}

