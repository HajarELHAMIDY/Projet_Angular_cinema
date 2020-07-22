import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthentificationService, private router : Router){

  }
  isAdmin(){
    return this.authService.isAdmin();
  }

  onLogout(){
    this.authService.removeTokenFromLocalStorage();
    this.router.navigateByUrl('/login');
  }

}
