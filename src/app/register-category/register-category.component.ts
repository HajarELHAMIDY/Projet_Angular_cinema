import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { CinemaService } from '../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-category',
  templateUrl: './register-category.component.html',
  styleUrls: ['./register-category.component.css']
})
export class RegisterCategoryComponent implements OnInit {

  category : Category ;
  message : any;

  constructor(private cinemaService : CinemaService, private router : Router) { }

  ngOnInit(): void {
    this.category = this.cinemaService.getterCategory();
  }
  

  public addCategory(){
    this.cinemaService.registerCategorie(this.category)
    .subscribe((data)=> this.message =data);
    
    this.router.navigate(['/categories']);

  }
  processForm(){
    if(this.category.name=="" || this.category.name==null){
      this.addCategory();
    }else{
      this.cinemaService.updateCategory(this.category).subscribe((data)=> this.message =data);
      this.router.navigate(['/categories']);;

    }
  }
}
