import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-change-location',
  templateUrl: './change-location.component.html',
  styleUrls: ['./change-location.component.scss'],
})
export class ChangeLocationComponent implements OnInit, AfterViewInit {
  @Input() currentLocation;
  @ViewChild('mapSearchField') searchField: ElementRef;
  @ViewChild(GoogleMap) map: GoogleMap;
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
    this.setMarker(this.currentLocation.coords);
    this.center = this.currentLocation.coords;
  }

  setMarker(coords) {
    this.marker = {
      position: coords,
      label: {
        color: 'red',
      }
    };
  }

  ngAfterViewInit(): void {
    this.setInputSearch();
  }

  setInputSearch() {
    const searchBox = new google.maps.places.SearchBox(
      this.searchField.nativeElement
    );

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if(places.length === 0) {
        return;
      }
      const bounds = new google.maps.LatLngBounds();
      console.log(bounds);
      places.forEach(place => {
        if(!place.geometry || !place.geometry.location) {
          return;
        }
        if(place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
        this.setMarker(place.geometry.location);
      });
      this.map.fitBounds(bounds);
    });
  }
}
