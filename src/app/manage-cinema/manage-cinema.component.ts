import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Router } from '@angular/router';
import { Cinema } from '../model/cinema.model';

@Component({
  selector: 'app-manage-cinema',
  templateUrl: './manage-cinema.component.html',
  styleUrls: ['./manage-cinema.component.css']
})
export class ManageCinemaComponent implements OnInit {


  public cinemas;

  constructor(private cinemaService:CinemaService, private router :Router) { }

  ngOnInit(): void {
    this.cinemaService.getCinemas2()
    .subscribe(data=>{
this.cinemas=data;
    },err=>{
console.log(err);
    })
  }
 
  reloadData() {
    this.cinemas = this.cinemaService.getCinemas2();
  }
  deleteCinema(cinema: Cinema) {
    
    this.cinemaService.deleteCinema(cinema.name)
      .subscribe(
        data => {
          this.cinemas=data;
        },
        error => console.log(error));
  }
  updateCinema(cinema){
    this.cinemaService.setterCinema(cinema);
  
    this.router.navigate(['/cinema/register']);
    this.cinemaService.getCinemas2()
    .subscribe(data=>{
this.cinemas=data;
    },err=>{
console.log(err);
    })
  }
  newCinema(){
    let cinema = new Cinema(0,"",0,0,0,null);
    this.cinemaService.setterCinema(cinema);
    this.router.navigate(['/cinema/register']);

  }

}
