import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {CinemaComponent} from './cinema/cinema.component';
import { LoginComponent } from './login/login.component';
import { VilleComponent } from './ville/ville.component';
import { RegisterVilleComponent } from './register-ville/register-ville.component';
import { RegisterCategoryComponent } from './register-category/register-category.component';
import { CategoryComponent } from './category/category.component';
import { FilmComponent } from './film/film.component';
import { RegisterFilmComponent } from './register-film/register-film.component';
import { SalleComponent } from './salle/salle.component';
import { RegisterSalleComponent } from './register-salle/register-salle.component';
import { SeanceComponent } from './seance/seance.component';
import { RegisterSeanceComponent } from './register-seance/register-seance.component';
import { ProjectionComponent } from './projection/projection.component';
import { RegisterProjectionComponent } from './register-projection/register-projection.component';
import { PlaceComponent } from './place/place.component';
import { RegisterPlaceComponent } from './register-place/register-place.component';
import { TicketComponent } from './ticket/ticket.component';
import { RegisterTicketComponent } from './register-ticket/register-ticket.component';
import { ManageCinemaComponent } from './manage-cinema/manage-cinema.component';
import { RegisterCinemaComponent } from './register-cinema/register-cinema.component';

const routes:Routes=[
  {path: 'cinema', component: CinemaComponent},
  {path:'login',component:LoginComponent},
  {path:'villes', component:VilleComponent},
  {path:'categories', component:CategoryComponent},
  {path:'ville/register', component:RegisterVilleComponent},
  {path:'category/register', component:RegisterCategoryComponent},
  {path:'films', component:FilmComponent},
  {path:'film/register', component:RegisterFilmComponent},
  {path:'salles', component:SalleComponent},
  {path:'salle/register', component:RegisterSalleComponent},
  {path:'seances', component:SeanceComponent},
  {path:'seance/register', component:RegisterSeanceComponent},
  {path:'projections', component:ProjectionComponent},
  {path:'projection/register', component:RegisterProjectionComponent},
  {path:'places', component:PlaceComponent},
  {path:'place/register', component:RegisterPlaceComponent},
  {path:'tickets', component:TicketComponent},
  {path:'ticket/register', component:RegisterTicketComponent},
  {path:'manage-cinemas', component:ManageCinemaComponent},
  {path:'cinema/register', component:RegisterCinemaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
