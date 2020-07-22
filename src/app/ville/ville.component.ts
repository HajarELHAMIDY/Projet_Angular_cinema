import { Component, OnInit } from '@angular/core';
import { Ville } from '../model/ville.model';
import { CinemaService } from '../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {
  public villes;

  constructor(private cinemaService:CinemaService, private router : Router) { }

  ngOnInit(): void {
    this.cinemaService.getVilles()
    .subscribe(data=>{
this.villes=data;
    },err=>{
console.log(err);
    })
  }
  onAddVille(){

  }
  reloadData() {
    this.villes = this.cinemaService.getVilles();
  }
  deleteVille(ville: Ville) {
    console.log(ville)
    this.cinemaService.deleteVille(ville.name)
      .subscribe(
        data => {
          this.villes.splice(this.villes.indexOf(ville),1);
        },
        error => console.log(error));
  }
  
  updateVille(ville){
    this.cinemaService.setterVille(ville);
  
    this.router.navigate(['/ville/register']);
    this.cinemaService.getVilles()
    .subscribe(data=>{
this.villes=data;
    },err=>{
console.log(err);
    })
  }
  newVille(){
    let ville = new Ville(0,"",0,0,0);
    this.cinemaService.setterVille(ville);
    this.router.navigate(['/ville/register'])


  }
  
  

}
