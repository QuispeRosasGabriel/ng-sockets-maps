import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  public map: mapboxgl.Map;

  constructor() {}

  ngOnInit(): void {
    this.createMap();
  }

  public createMap() {
    (mapboxgl as any).accessToken =
      'pk.eyJ1IjoiZ2FicmllbDE0MDMiLCJhIjoiY2tmZzc3Ym5vMDJpNzJxbXp0NWx6ZTZieiJ9.LeR4T4_Y81Gdwaqcd4ixzw';
    const map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
    });
  }
}
