import { Component, Input, OnInit } from "@angular/core";
import * as L from "leaflet";
import 'leaflet.motion/dist/leaflet.motion.js'
import * as PolyUtils from "polyline-encoded";
import { Destination } from "models/destination.model";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  map;

  @Input() startingDestination: Destination;
  @Input() destinations: Destination[];
  @Input() encodedPolyline: string;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
    this.initMarkers();
    this.initPolyline()
   }

  initPolyline() {
    (L as any).motion.polyline(PolyUtils.decode(this.encodedPolyline), {
      color: "red"
    }, {
      auto: true,
      duration: 10000,
      easing: (L as any).Motion.Ease.linear

    }
    , {
      removeOnEnd: true,
      showMarker: false,
      icon: L.divIcon({html: "<i class='fa fa-car fa-2x' aria-hidden='true'></i>", iconSize: L.point(27.5, 24)})
    }
    ).addTo(this.map);
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

  initMarkers() {
    let bounds = []

    // StartingDestination Marker
    const x = this.startingDestination.coordinate.x;
    const y = this.startingDestination.coordinate.y;
    const id = this.startingDestination.id;
    const establishmentName = this.startingDestination.establishmentName;
    const doctorName = this.startingDestination.doctorName;
    const horaires = this.startingDestination.horaires;
    const address = this.startingDestination.address;
    const coordinate = this.startingDestination.coordinate;
    const index = this.startingDestination.index;
    const arrivalTime = this.startingDestination.arrivalTime;
    const endTime = this.startingDestination.endTime;
    const duration = this.startingDestination.duration;

    const marker = L.marker([y, x])
        .bindPopup(
          `<b>${doctorName}</b>
          <br>${address}
          <br>Destination number: ${index}
          <br>Arrival time: ${arrivalTime}`
        )
        .addTo(this.map);

        bounds.push([y,x])

    // Destinations Marker
    this.destinations.forEach((destination) => {
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
      const duration = destination.duration;

      const marker = L.marker([y, x])
        .bindPopup(
          `<b>${doctorName}</b>
          <br>${address}
          <br>Destination number: ${index}
          <br>Arrival time: ${arrivalTime}`
        )
        .addTo(this.map);

        bounds.push([y,x])
    });

    // this centers the map
    this.map.fitBounds(bounds)
  }
}
