import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Place } from '../model/place.model';

@Component({
  selector: 'app-register-place',
  templateUrl: './register-place.component.html',
  styleUrls: ['./register-place.component.css']
})
export class RegisterPlaceComponent implements OnInit {

 
  place : Place ;
  message : any;

  constructor(private cinemaService : CinemaService, private router : Router) { }

  ngOnInit(): void {
    this.place = this.cinemaService.getterPlace();
  }
  

  public addPlace(){
    this.cinemaService.registerPlace(this.place)
    .subscribe((data)=> this.message =data);
    
    this.router.navigate(['/places']);

  }
  processForm(){
    if(this.place.id==undefined ){
      this.addPlace();
    }else{
      this.cinemaService.updatePlace(this.place).subscribe((data)=> this.message =data);
      this.router.navigate(['/places']);;

    }
  }

}
