import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './_services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectAngular';
  isSignedIn!: boolean;
  constructor(
    
    public router: Router,
    public token: StorageService
  ) {}
  ngOnInit() {
    // this.auth.userAuthState.subscribe((val) => {
    //   this.isSignedIn = val;
    //});
  }
  // Signout
  signOut() {
    //this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
}
