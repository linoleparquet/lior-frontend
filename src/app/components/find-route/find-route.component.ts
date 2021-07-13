import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'app/services/routing.service';
import { Destination } from 'models/destination.model';

@Component({
  selector: 'app-find-route',
  templateUrl: './find-route.component.html',
  styleUrls: ['./find-route.component.css']
})
export class FindRouteComponent implements OnInit {

  constructor(private routingService :RoutingService) { }

  ngOnInit(): void {
  }

  startingDestination: Destination;
  destinations: Destination[]
  destinationsNotVisited : Destination[]

  button() {
    this.routingService.getVrptwAll().subscribe((routingDto) => {
      this.startingDestination = routingDto.startingDestination;
      this.destinations = routingDto.destinations;
      this.destinationsNotVisited = routingDto.destinationsNotVisited;

    });
  }
}
