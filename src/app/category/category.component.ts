import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Category } from '../model/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  

  public categories;

  constructor(private cinemaService:CinemaService, private router :Router) { }

  ngOnInit(): void {
    this.cinemaService.getCategories()
    .subscribe(data=>{
this.categories=data;
    },err=>{
console.log(err);
    })
  }
 
  reloadData() {
    this.categories = this.cinemaService.getCategories();
  }
  deleteCategory(category: Category) {
    
    this.cinemaService.deleteCategory(category.name)
      .subscribe(
        data => {
          this.categories=data;
        },
        error => console.log(error));
  }
  updateCategory(category){
    this.cinemaService.setterVille(category);
  
    this.router.navigate(['/category/register']);
    this.cinemaService.getVilles()
    .subscribe(data=>{
this.categories=data;
    },err=>{
console.log(err);
    })
  }
  newCategory(){
    let category = new Category(0,"");
    this.cinemaService.setterVille(category);
    this.router.navigate(['/category/register']);

  }
}
