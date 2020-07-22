import { Component, OnInit } from '@angular/core';
import { Salle } from '../model/salle.model';
import { CinemaService } from '../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-salle',
  templateUrl: './register-salle.component.html',
  styleUrls: ['./register-salle.component.css']
})
export class RegisterSalleComponent implements OnInit {

  salle : Salle ;
  message : any;

  constructor(private cinemaService : CinemaService, private router : Router) { 

  }

  ngOnInit() {
    this.salle = this.cinemaService.getterSalle();
  }
  

  public addSalle(){
    this.cinemaService.registerSalle(this.salle)
    .subscribe((data)=> this.message =data);
    this.router.navigate(['/salles']);

  }
  
  processForm(){
    if(this.salle.id==undefined){
      this.addSalle();
    }else{
      this.cinemaService.updateSalle(this.salle).subscribe((data)=> this.message =data);
      this.router.navigate(['/salles']);;

    }
  }
}
