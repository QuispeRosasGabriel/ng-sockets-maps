import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Lugares } from 'src/app/interfaces/lugares.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  public map: mapboxgl.Map;
  public lugares: Lugares[] = [
    {
      id: '1',
      nombre: 'Fernando',
      lng: -75.75512993582937,
      lat: 45.349977429009954,
      color: '#dd8fee',
    },
    {
      id: '2',
      nombre: 'Amy',
      lng: -75.75195645527508,
      lat: 45.351584045823756,
      color: '#790af0',
    },
    {
      id: '3',
      nombre: 'Orlando',
      lng: -75.75900589557777,
      lat: 45.34794635758547,
      color: '#19884b',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.createMap();
  }

  public createMap() {
    (mapboxgl as any).accessToken =
      'pk.eyJ1IjoiZ2FicmllbDE0MDMiLCJhIjoiY2tmZzc3Ym5vMDJpNzJxbXp0NWx6ZTZieiJ9.LeR4T4_Y81Gdwaqcd4ixzw';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.75512993582937, 45.349977429009954],
      zoom: 15.8,
    });

    for (const marcador of this.lugares) {
      this.addMarker(marcador);
    }
  }

  public addMarker(marcador: Lugares) {
    const marker = new mapboxgl.Marker({
      draggable: true,
      color: marcador.color,
    })
      .setLngLat([marcador.lng, marcador.lat])
      .addTo(this.map);
  }
}
