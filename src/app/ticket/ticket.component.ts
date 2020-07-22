import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Ticket } from '../model/ticket.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  public tickets;

  constructor(private cinemaService:CinemaService, private router : Router) { }

  ngOnInit(): void {
    this.cinemaService.getTickets()
    .subscribe(data=>{
this.tickets=data;
    },err=>{
console.log(err);
    })
  }

  reloadData() {
    this.tickets = this.cinemaService.getTickets();
  }
  deleteTicket(ticket: Ticket) {
 
    this.cinemaService.deleteTicket(ticket.id)
      .subscribe(
        data => {
          this.tickets.splice(this.tickets.indexOf(ticket),1);
        },
        error => console.log(error));
  }
  
  updateTicket(ticket){
    this.cinemaService.setterTicket(ticket);
  
    this.router.navigate(['/ticket/register']);
    this.cinemaService.getTickets()
    .subscribe(data=>{
this.tickets=data;
    },err=>{
console.log(err);
    })
  }
  newTicket(){
    let ticket = new Ticket(0, null,0,0,null);
    this.cinemaService.setterTicket(ticket);
    this.router.navigate(['/ticket/register']);


  }
  

}
