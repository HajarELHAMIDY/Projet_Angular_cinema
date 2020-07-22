import { Injectable } from '@angular/core';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private users =[
    {username : 'admin', password:'123', roles:['ADMIN','USER']},
    {username : 'user1', password:'123', roles:['USER']},
    {username : 'user2', password:'123', roles:['USER']},
  ]
  public isAuthenticated: boolean ;
   public userAuthenticated;
   public token;

  constructor() { }
  public login(username:string, pwd : string){
    let user ;
    this.users.forEach(u=>{
      if(u.username == username && u.password == pwd){
        user = u;
        this.token = {username:u.username, roles : u.roles};
      }
    });
    if(user){
      this.isAuthenticated=true;
      this.userAuthenticated=user;
    }else{
      this.isAuthenticated=false;
      this.userAuthenticated=undefined;

    }
  }
  public isAdmin(){
    if(this.userAuthenticated)
    if(this.userAuthenticated.roles.indexOf('ADMIN')>-1){
      return true;
    }else{
      return false;
    }
  }
  public saveAuthenticatedUser(){
    if(this.userAuthenticated){
      localStorage.setItem('authToken',btoa(JSON.stringify(this.token)))
    }

  }
  public loadAuthenticatedUserFromStorage(){
    let t = localStorage.getItem('authToken');
    if(t){
      let user = JSON.parse(atob(t));
      this.userAuthenticated={username:user.username,roles:user.roles};
      this.isAuthenticated=true; 
      this.token = t;
    }
  

  }

  public removeTokenFromLocalStorage(){
    localStorage.removeItem('authToken');
    this.isAuthenticated=false;
    this.token=undefined;
    this.userAuthenticated=undefined;
  }
}
