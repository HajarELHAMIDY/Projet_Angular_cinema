import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Router } from '@angular/router';
import { Place } from '../model/place.model';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  public places;

  constructor(private cinemaService:CinemaService, private router : Router) { }

  ngOnInit(): void {
    this.cinemaService.getPlaces()
    .subscribe(data=>{
this.places=data;
    },err=>{
console.log(err);
    })
  }

  reloadData() {
    this.places = this.cinemaService.getPlaces();
  }
  deletePlace(place: Place) {
 
    this.cinemaService.deletePlace(place.id)
      .subscribe(
        data => {
          this.places.splice(this.places.indexOf(place),1);
        },
        error => console.log(error));
  }
  
  updatePlace(place){
    this.cinemaService.setterPlace(place);
  
    this.router.navigate(['/place/register']);
    this.cinemaService.getPlaces()
    .subscribe(data=>{
this.places=data;
    },err=>{
console.log(err);
    })
  }
  newPlace(){
    let place = new Place(0, 0,0,0);
    this.cinemaService.setterPlace(place);
    this.router.navigate(['/place/register']);


  }
  


}
