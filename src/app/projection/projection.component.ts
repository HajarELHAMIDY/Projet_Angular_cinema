import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Projection } from '../model/projection.model';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

  public projections;

  constructor(private cinemaService:CinemaService, private router : Router) { }

  ngOnInit(): void {
    this.cinemaService.getProjections2()
    .subscribe(data=>{
this.projections=data;
    },err=>{
console.log(err);
    })
  }

  reloadData() {
    this.projections = this.cinemaService.getProjections2();
  }
  deleteProjection(projection: Projection) {
 
    this.cinemaService.deleteProjection(projection.id)
      .subscribe(
        data => {
          this.projections.splice(this.projections.indexOf(projection),1);
        },
        error => console.log(error));
  }
  
  updateProjection(projection){
    console.log(projection.film)
    this.cinemaService.setterTicket(projection);
  
    this.router.navigate(['/projection/register']);
    this.cinemaService.getProjections2()
    .subscribe(data=>{
this.projections=data;
    },err=>{
console.log(err);
    })
  }
  newProjection(){
    let projrction = new Projection(0, null,0,null);
    this.cinemaService.setterProjection(projrction);
    this.router.navigate(['/projection/register']);


  }
  


}
