import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse,HttpRequest, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Ville } from '../model/ville.model';
import { Category } from '../model/category.model';
import { RegisterFilmComponent } from '../register-film/register-film.component';
import { Film } from '../model/film.model';
import { TicketComponent } from '../ticket/ticket.component';
import { Ticket } from '../model/ticket.model';
import { Place } from '../model/place.model';
import { ProjectionComponent } from '../projection/projection.component';
import { Projection } from '../model/projection.model';
import { Salle } from '../model/salle.model';
import { Cinema } from '../model/cinema.model';


@Injectable({
  providedIn: 'root'
})
export class CinemaService {
public  host:string="http://localhost:8080";
private hedears = new HttpHeaders({'Content-Type':'application/json'});
private ville :Ville = new Ville(0,null,0,0,0);
private category :Category = new Category(0,null);
private film :Film = new Film(0,null, null, null,null,0,null,null);
private ticket :Ticket= new Ticket(0,null, 0, 0,null);
private place :Place= new Place(0,0, 0, 0);
private projection : Projection = new Projection(0,null,0,null);
private salle : Salle = new Salle(0,null,0)
private cinema : Cinema = new Cinema(0,null,0,0,0,null);
  constructor(private http:HttpClient) { }

  public getVilles(){
return this.http.get(this.host+"/villes");
  }
  public getCinemas2(){
    return this.http.get(this.host+"/cinemas");
      }
  public getSalles2(){
    return this.http.get(this.host+"/salles");
      }

  public getProjections2(){
    return this.http.get(this.host+"/projections");
      }
  public getPlaces(){
    return this.http.get(this.host+"/places");
      }

  public getFilms(){
    return this.http.get(this.host+"/films");
      }
      public getTickets(){
        return this.http.get(this.host+"/tickets");
          }

  public getCategories(){
    return this.http.get(this.host+"/categories");
      }
  getCinemas(v) {
    return this.http.get(v._links.cinemas.href);
  }

  getSalles(c) {
    return this.http.get(c._links.salles.href);
  }

  getProjections(salle) {
  let url=salle._links.projections.href.replace("{?projection}","")
    return this.http.get(url+"?projection=p1");
  }

  getTicketsPlaces(p) {
  let url=p._links.tickets.href.replace("{?projection}","")
  return this.http.get(url+"?projection=ticketProj");
  }

  payerTickets(dataForm) {
  return this.http.post(this.host+"/payerTickets",dataForm);
  }
  deleteVille(name: string): Observable<any> {
    return this.http.delete(this.host+'/villes/cancel/'+name);
  }
  deleteCinema(name: string): Observable<any> {
    return this.http.delete(this.host+'/cineams/cancel/'+name);
  }
  deleteSalle(id: number): Observable<any> {
    return this.http.delete(this.host+'/salles/cancel/'+id);
  }
  deleteFilm(id: number): Observable<any> {
    return this.http.delete(this.host+'/films/cancel/'+name);
  }
  deletePlace(id: number): Observable<any> {
    return this.http.delete(this.host+'/places/cancel/'+id);
  }
  deleteCategory(name: string): Observable<any> {
    return this.http.delete(this.host+'/categories/cancel/'+name);
  }
  deleteTicket(id: number): Observable<any> {
    return this.http.delete(this.host+'/tickets/cancel/'+id);
  }
  deleteProjection(id: number): Observable<any> {
    return this.http.delete(this.host+'/projections/cancel/'+id);
  }
  
   registerVille(ville){
    return this.http.post(this.host+'/villes/register',ville, {responseType:'text' as 'json'});
  }
  registerFilm(film){
    return this.http.post(this.host+'/films/register',film, {responseType:'text' as 'json'});
  }
  updateVille(ville){
    return this.http.put(this.host+'/villes/update',ville, {responseType:'text' as 'json'});
  }
  registerPlace(place){
    return this.http.post(this.host+'/places/register',place, {responseType:'text' as 'json'});
  }
  updatePlace(place){
    return this.http.put(this.host+'/places/update',place, {responseType:'text' as 'json'});
  }

  updateFilm(film){
    return this.http.put(this.host+'/films/update',film, {responseType:'text' as 'json'});
  }
  updateCategory(category){
    return this.http.put(this.host+'/categories/update',category, {responseType:'text' as 'json'});
  }
  registerCategorie(category){
    return this.http.post(this.host+'/categories/register',category, {responseType:'text' as 'json'});
  }

  updateTicket(ticket){
    return this.http.put(this.host+'/tickets/update',ticket, {responseType:'text' as 'json'});
  }
  registerTicket(ticket){
    return this.http.post(this.host+'/ticket/register',ticket, {responseType:'text' as 'json'});
  }
  updateProjection(projection){
    return this.http.put(this.host+'/tickets/update',projection, {responseType:'text' as 'json'});
  }
  registerProjection(projection){
    return this.http.post(this.host+'/projection/register',projection, {responseType:'text' as 'json'});
  }
  registerSalle(salle){
    return this.http.post(this.host+'/salles/register',salle, {responseType:'text' as 'json'});
  }
  updateSalle(salle){
    return this.http.put(this.host+'/salles/update',salle, {responseType:'text' as 'json'});
  }

  registerCinema(cinema){
    return this.http.post(this.host+'/cinemas/register',cinema, {responseType:'text' as 'json'});
  }
  updateCinema(ville){
    return this.http.put(this.host+'/cinemas/update',ville, {responseType:'text' as 'json'});
  }
  setterVille (ville){
    this.ville = ville;
  }
  getterVille(){
    return this.ville;
  }

  setterCinema (cinema){
    this.cinema = cinema;
  }
  getterCinema(){
    return this.cinema;
  }
  setterSalle (salle){
    this.salle = salle;
  }
  getterSalle(){
    return this.salle;
  }
  setterPlace (place){
    this.place = place;
  }
  getterPlace(){
    return this.place;
  }
  setterFilm (film){
    this.film = film;
  }
  getterFilm(){
    return this.film;
  }
  setterCategory(category){
    this.category = category;
  }
  getterCategory(){
    return this.category;
  }


  setterTicket(ticket){
    this.ticket = ticket;
  }
  getterProjection(){
    return this.projection;
  }
  setterProjection(projection){
    this.projection = projection;
  }
  getterTicket(){
    return this.ticket;
  }


  uploadPhotoFilm(file : File, id):Observable<HttpEvent<{}>>{

    let formdata : FormData = new FormData();
    formdata.append('file', file);
    const req   = new HttpRequest('POST',this.host+'/uploadPhoto/'+id,formdata,{
      reportProgress : true, 
      responseType:'text'

    }); 
    return this.http.request(req);


   }
   public getFilm(url): Observable<Film>{
    return this.http.get<Film>(url);

    
  }
}
