import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const map = L.map('map').setView([50.6311634, 3.0599573], 12);
 
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      attribution: 'Map',
      id: 'mapbox/light-v9'
    }).addTo(map);

    const marker = L.marker([50.6311634, 3.0599573]).bindPopup("<b>Hello world!</b><br>I am a popup.").addTo(map);


  }

}
