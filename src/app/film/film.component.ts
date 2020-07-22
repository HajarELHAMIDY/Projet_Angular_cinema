import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Film } from '../model/film.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  public films;
  public editPhoto : boolean;
  public currentfilm :Film;
  public selectedFile; 
 
  public currentFileUpload; 
 
  public timeStam : number=0;
  constructor(public cinemaService:CinemaService, private router :Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.cinemaService.getFilms()
    .subscribe(data=>{
this.films=data;
    },err=>{
console.log(err);
    });
    let url = atob(this.route.snapshot.params.url);
    this.cinemaService.getFilm(url).subscribe(data=>{
      this.currentfilm = data;
    })
  }
  onSelectedFile(event){
    this.selectedFile = event.target.files; 
  }
  reloadData() {
    this.films = this.cinemaService.getFilms();
  }
  deleteFilm(film: Film) {
    
    this.cinemaService.deleteFilm(film.id)
      .subscribe(
        data => {
          this.films=data;
        },
        error => console.log(error));
  }
  updateFilm(film){
    this.cinemaService.setterFilm(film);
  
    this.router.navigate(['/film/register']);
    this.cinemaService.getVilles()
    .subscribe(data=>{
this.films=data;
    },err=>{
console.log(err);
    })
  }
  newFilm(){
    let film = new Film(0,null, null, null,null,0,null,null);
    this.cinemaService.setterFilm(film);
    this.router.navigate(['/film/register']);

  }
  uploadPhoto(){

    this.currentFileUpload = this.selectedFile.item(0);
    console.log(this.currentfilm.id);
    this.cinemaService.uploadPhotoFilm(this.currentFileUpload, this.currentfilm.id).subscribe(event => {
      if(event.type == HttpEventType.UploadProgress){
 
      }else if (event instanceof HttpResponse){
        console.log("c marche")
        this.timeStam=Date.now();

      }

      },err=>{
        alert('Problème de chargement !! ')
    })
    this.selectedFile = undefined;



  }

  getTs(){
    return this.timeStam;
  }
  OnEditPhoto(p){
   
    this.currentfilm= p; 
    this.editPhoto =true;
  }
  
}
