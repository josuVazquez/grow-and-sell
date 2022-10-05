import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-location',
  templateUrl: './change-location.component.html',
  styleUrls: ['./change-location.component.scss'],
})
export class ChangeLocationComponent implements OnInit {
  @Input() currentLocation;
  marker;
  center: google.maps.LatLngLiteral;

  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    draggable: false,
    clickableIcons: false
  };

  constructor() { }

  ngOnInit() {
    this.marker = {
      position: this.currentLocation.coords,
      label: {
        color: 'red',
      }
    };
    this.center = this.currentLocation.coords;
  }

}
