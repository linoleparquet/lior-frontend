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
    this.button()
  }

  startingDestination: Destination;
  destinations: Destination[];
  destinationsNotVisited : Destination[];
  encodedPolyline: string;

  button() {
    this.routingService.getVrptwAll().subscribe((routingDto) => {
      this.encodedPolyline = routingDto.encodedPolyline;
      this.startingDestination = routingDto.startingDestination;
      this.destinations = routingDto.destinations;
      this.destinationsNotVisited = routingDto.destinationsNotVisited;

    });
  }
}
