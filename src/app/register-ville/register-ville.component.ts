import { Component, OnInit } from '@angular/core';
import { Ville } from '../model/ville.model';
import { CinemaService } from '../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-ville',
  templateUrl: './register-ville.component.html',
  styleUrls: ['./register-ville.component.css']
})
export class RegisterVilleComponent implements OnInit {
  ville : Ville ;
  message : any;

  constructor(private cinemaService : CinemaService, private router : Router) { 

  }

  ngOnInit() {
    this.ville = this.cinemaService.getterVille();
  }
  

  public addVille(){
    this.cinemaService.registerVille(this.ville)
    .subscribe((data)=> this.message =data);
    this.router.navigate(['/villes']);

  }
  
  processForm(){
    if(this.ville.id==undefined){
      this.addVille();
    }else{
      this.cinemaService.updateVille(this.ville).subscribe((data)=> this.message =data);
      this.router.navigate(['/villes']);;

    }
  }
}
