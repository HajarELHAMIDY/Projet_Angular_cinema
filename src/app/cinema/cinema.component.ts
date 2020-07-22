import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CinemaService} from '../services/cinema.service';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
public villes;
public cinemas;
public salles;
public currentCinema;
public cureentVille;
public currentProjection;
public selectedTicket: any[]=[];
  constructor(public cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.getVilles()
      .subscribe(data=>{
this.villes=data;
      },err=>{
console.log(err);
      })
  }

  onGetCinemas(v: any) {
    this.cureentVille=v;
    this.currentCinema=undefined;
    this.salles=undefined;
    this.cinemaService.getCinemas(v)
      .subscribe(data=>{
        this.cinemas=data;
      },err=>{
        console.log(err);
      })
  }

  onGetSalles(c: any) {
    this.currentCinema=c;
    this.cinemaService.getSalles(c)
      .subscribe(data=>{
        this.salles=data;
        this.salles._embedded.salles.forEach(salle=>{
          this.cinemaService.getProjections(salle)
            .subscribe(data=>{
              salle.projections=data;
            },err=>{
              console.log(err);
            })
        })
      },err=>{
        console.log(err);
      })
  }

  onGetPlaces(p) {
    this.currentProjection=p;
    this.cinemaService.getTicketsPlaces(p)
      .subscribe(data=>{
        this.currentProjection.tickets=data;
        this.selectedTicket=[];
      },err=>{
        console.log(err);
      })
  }

  onSelectTicket(t) {
  t.selected=!t.selected;
  if (t.selected){
    this.selectedTicket.push(t);
  }else {
    this.selectedTicket.splice(this.selectedTicket.indexOf(t),1);
  }
  }

  getTicketClass(t: any) {
    let str="btn ticket";
    if (t.reserve){
      str+=" btn-danger";
    }else if (t.selected){
      str+=" btn-warning";
    }else {
      str+=" btn-success";
    }
return str;
  }

  onPayTickets(dataForm) {
    let tickets=[];
    this.selectedTicket.forEach(t=>{
      tickets.push(t.id);
    });
    dataForm.tickets=tickets;
    this.cinemaService.payerTickets(dataForm)
      .subscribe(data=>{
        alert("Tickets Reserves avec Succes!!");
        this.onGetPlaces(this.currentProjection);
      },err=>{
        console.log(err);
      })
  }
}
