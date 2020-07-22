import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { VilleComponent } from './ville/ville.component';
import { RegisterVilleComponent } from './register-ville/register-ville.component';
import { CategoryComponent } from './category/category.component';
import { RegisterCategoryComponent } from './register-category/register-category.component';
import { FilmComponent } from './film/film.component';
import { RegisterFilmComponent } from './register-film/register-film.component';
import { SalleComponent } from './salle/salle.component';
import { SeanceComponent } from './seance/seance.component';
import { RegisterSeanceComponent } from './register-seance/register-seance.component';
import { PlaceComponent } from './place/place.component';
import { RegisterPlaceComponent } from './register-place/register-place.component';
import { ProjectionComponent } from './projection/projection.component';
import { RegisterProjectionComponent } from './register-projection/register-projection.component';
import { TicketComponent } from './ticket/ticket.component';
import { RegisterTicketComponent } from './register-ticket/register-ticket.component';
import { RegisterSalleComponent } from './register-salle/register-salle.component';
import { ManageCinemaComponent } from './manage-cinema/manage-cinema.component';
import { RegisterCinemaComponent } from './register-cinema/register-cinema.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    LoginComponent,
    VilleComponent,
    RegisterVilleComponent,
    CategoryComponent,
    RegisterCategoryComponent,
    FilmComponent,
    RegisterFilmComponent,
    SalleComponent,
    SeanceComponent,
    RegisterSeanceComponent,
    PlaceComponent,
    RegisterPlaceComponent,
    ProjectionComponent,
    RegisterProjectionComponent,
    TicketComponent,
    RegisterTicketComponent,
    RegisterSalleComponent,
    ManageCinemaComponent,
    RegisterCinemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
