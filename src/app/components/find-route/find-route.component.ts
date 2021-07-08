import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'app/services/routing.service';

@Component({
  selector: 'app-find-route',
  templateUrl: './find-route.component.html',
  styleUrls: ['./find-route.component.css']
})
export class FindRouteComponent implements OnInit {

  constructor(private routingService :RoutingService) { }

  ngOnInit(): void {
  }

  destinations: any[]
  destinationsNotVisited : any[]

  button() {
    this.routingService.getVrptwAll().subscribe((routingDto) => {
      console.log(routingDto);
      this.destinations = routingDto.destinations;
      this.destinationsNotVisited = routingDto.destinationsNotVisited;

    });
  }
}
