import { Component, OnInit } from "@angular/core";
import { RoutingService } from "app/services/routing.service";
import * as L from "leaflet";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  map;

  constructor(private routingService: RoutingService) {}

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {
    this.map = L.map("map").setView([50.6311634, 3.0599573], 12);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        attribution: "Map",
        id: "mapbox/light-v9",
      }
    ).addTo(this.map);
  }

  button() {
    this.routingService.getVrptw([1, 2, 3, 4]).subscribe((routingDto) => {
      console.log(routingDto);

      routingDto.destinations.forEach((destination) => {
        const x = destination.coordinate.x;
        const y = destination.coordinate.y;
        const id = destination.id;
        const establishmentName = destination.establishmentName;
        const doctorName = destination.doctorName;
        const horaires = destination.horaires;
        const address = destination.address;
        const coordinate = destination.coordinate;
        const index = destination.index;
        const arrivalTime = destination.arrivalTime;
        const endTime = destination.endTime;

        const marker = L.marker([y, x])
          .bindPopup(
            `<b>${doctorName}</b><br>${arrivalTime}<br>x = ${x}<br>y = ${y}`
          )
          .addTo(this.map);
      });
    });
  }
}
