import { Component, OnInit } from '@angular/core';
import { Ticket } from '../model/ticket.model';
import { CinemaService } from '../services/cinema.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-ticket',
  templateUrl: './register-ticket.component.html',
  styleUrls: ['./register-ticket.component.css']
})
export class RegisterTicketComponent implements OnInit {

  ticket : Ticket ;
  message : any;

  constructor(private cinemaService : CinemaService, private router : Router) { 

  }

  ngOnInit() {
    this.ticket = this.cinemaService.getterTicket();
  }
  

  public addTicket(){
    this.cinemaService.registerTicket(this.ticket)
    .subscribe((data)=> this.message =data);
    this.router.navigate(['/tickets']);

  }
  
  processForm(){
    if(this.ticket.id==undefined){
      this.addTicket();
    }else{
      this.cinemaService.updateTicket(this.ticket).subscribe((data)=> this.message =data);
      this.router.navigate(['/tickets']);;

    }
  }

}
