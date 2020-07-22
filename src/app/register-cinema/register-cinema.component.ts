import { Component, OnInit } from '@angular/core';
import { Cinema } from '../model/cinema.model';
import { CinemaService } from '../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-cinema',
  templateUrl: './register-cinema.component.html',
  styleUrls: ['./register-cinema.component.css']
})
export class RegisterCinemaComponent implements OnInit {
  cinema : Cinema ;
  message : any;
  villes ; 

  constructor(private cinemaService : CinemaService, private router : Router) { 

  }

  ngOnInit() {
    this.cinema = this.cinemaService.getterCinema();
    this.villes = this.cinemaService.getVilles().subscribe(data=>{
      this.villes=data;
          },err=>{
      console.log(err);
          })
  }
  

  public addCinema(){
    this.cinemaService.registerCinema(this.cinema)
    .subscribe((data)=> this.message =data);
    this.router.navigate(['/manage-cinemas']);

  }
  
  processForm(){
    if(this.cinema.name=="" || this.cinema.name==null){
      this.addCinema();
    }else{
      this.cinemaService.updateCinema(this.cinema).subscribe((data)=> this.message =data);
      this.router.navigate(['/manage-cinemas']);;

    }
  }

}
