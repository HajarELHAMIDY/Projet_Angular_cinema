import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-register-film',
  templateUrl: './register-film.component.html',
  styleUrls: ['./register-film.component.css']
})
export class RegisterFilmComponent implements OnInit {

  film : Film;
  message : any;
  categories;

  constructor(private cinemaService : CinemaService, private router : Router) { }

  ngOnInit(): void {
    this.film = this.cinemaService.getterFilm();
    this.categories = this.cinemaService.getCategories().subscribe(data=>{
      this.categories=data;
          },err=>{
      console.log(err);
          })
  }
  

  public addFilm(){
    this.cinemaService.registerCategorie(this.film)
    .subscribe((data)=> this.message =data);
    
    this.router.navigate(['/films']);

  }
  processForm(){
    if(this.film.titre=="" || this.film.titre==null){
      this.addFilm();
    }else{
      this.cinemaService.updateFilm(this.film).subscribe((data)=> this.message =data);
      this.router.navigate(['/films']);;

    }
  }
}
