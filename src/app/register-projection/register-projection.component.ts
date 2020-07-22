import { Component, OnInit } from '@angular/core';
import { Projection } from '../model/projection.model';
import { CinemaService } from '../services/cinema.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-projection',
  templateUrl: './register-projection.component.html',
  styleUrls: ['./register-projection.component.css']
})
export class RegisterProjectionComponent implements OnInit {

  projection : Projection;
  message : any;
  films;
  salles; 
  seances;

  constructor(private cinemaService : CinemaService, private router : Router) { }

  ngOnInit(): void {
    this.projection = this.cinemaService.getterProjection();
    this.films = this.cinemaService.getFilms().subscribe(data=>{
      this.films=data;
          },err=>{
      console.log(err);
          })
  }
  

  public addProjection(){
    this.cinemaService.registerProjection(this.projection)
    .subscribe((data)=> this.message =data);
    
    this.router.navigate(['/projections']);

  }
  processForm(){
    if(this.projection.id==undefined ){
      this.addProjection();
    }else{
      this.cinemaService.updateProjection(this.projection).subscribe((data)=> this.message =data);
      this.router.navigate(['/projections']);;

    }
  }

}
