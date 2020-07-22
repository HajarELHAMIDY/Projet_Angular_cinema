import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Router } from '@angular/router';
import { Salle } from '../model/salle.model';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  public salles;

  constructor(private cinemaService:CinemaService, private router : Router) { }

  ngOnInit(): void {
    this.cinemaService.getSalles2()
    .subscribe(data=>{
this.salles=data;
    },err=>{
console.log(err);
    })
  }
 
  reloadData() {
    this.salles = this.cinemaService.getSalles2();
  }
  deleteSalle(salle: Salle) {

    this.cinemaService.deleteSalle(salle.id)
      .subscribe(
        data => {
          this.salles.splice(this.salles.indexOf(salle),1);
        },
        error => console.log(error));
  }
  
  updateSalle(salle){
    this.cinemaService.setterSalle(salle);
  
    this.router.navigate(['/salle/register']);
    this.cinemaService.getSalles2()
    .subscribe(data=>{
this.salles=data;
    },err=>{
console.log(err);
    })
  }
  newSalle(){
    let salle = new Salle(0,"",0);
    this.cinemaService.setterSalle(salle);
    this.router.navigate(['/salle/register'])


  }
  

}
