import { Component, Input, OnInit } from "@angular/core";
import * as L from "leaflet";
import "leaflet.motion/dist/leaflet.motion.js";
import * as PolyUtils from "polyline-encoded";
import { Destination } from "models/destination.model";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  map;

  @Input() destinations: Destination[];
  @Input() encodedPolyline: string;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
    this.initMarkers();
    this.initPolyline();
  }

  initPolyline() {
    (L as any).motion
      .polyline(
        PolyUtils.decode(this.encodedPolyline),
        {
          color: "#2DC4DC",
        },
        {
          auto: true,
          duration: 10000,
          easing: (L as any).Motion.Ease.linear,
        },
        {
          removeOnEnd: true,
          showMarker: false,
          icon: L.divIcon({
            html: "<i color='#54E2C1'></i>",
            iconSize: L.point(1, 1),
          }),
        }
      )
      .addTo(this.map);
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
    let bounds = [];

    const icon = new L.Icon({
      iconUrl: "assets/svg/map-marker.svg",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    // Destinations Marker
    this.destinations.forEach((destination, _index, _array) => {
      const x = destination.coordinate.x;
      const y = destination.coordinate.y;
      const id = destination.id;
      const establishmentName = destination.establishmentName;
      const doctorName = destination.doctorName;
      const horaires = destination.horaires;
      const address = destination.address;
      const coordinate = destination.coordinate;
      const index = _index;
      const arrivalTime = destination.arrivalTime;
      const endTime = destination.endTime;
      const duration = destination.duration;

      if (_index != _array.length - 1) {
        const marker = L.marker([y, x])
          .setIcon(icon)
          .bindPopup(
            `<b>${index}. ${doctorName}</b>
        <br>${address}
        <br>Arrival time: ${arrivalTime}`
          )
          .addTo(this.map);
      } else {
        const marker = L.marker([y, x])
          .setIcon(icon)
          .bindPopup(
            `<b>Start / End</b>
        <br>${address}
        <br>Arrival time: ${arrivalTime}`
          )
          .addTo(this.map);
      }

      bounds.push([y, x]);
    });

    // It set the polyline on the center of the map
    this.map.fitBounds(bounds);
  }
}
