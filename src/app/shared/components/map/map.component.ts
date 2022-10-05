import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChangeLocationComponent } from '../change-location/change-location.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  marker;
  center: google.maps.LatLngLiteral;
  streetName = '';

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
  geocoder = new google.maps.Geocoder();

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.marker = {
        position: {
          lat: this.center.lat,
          lng: this.center.lng,
        },
        label: {
          color: 'red',
        }
      };
      this.getStreet(this.center);
    });
  }

  getStreet(latlng) {
    this.geocoder
    .geocode({ location: latlng })
    .then((response) => {
      const address = response.results[0].address_components;
      this.streetName = `${address[address.length - 1]?.long_name}, ${address[address.length - 5]?.long_name}`;
    });
  }

  async openChangeLocationModal() {
    const modal = await this.modalController.create({
      component: ChangeLocationComponent,
      componentProps: { currentLocation: { coords: this.center, streetName: this.streetName } },
      cssClass: 'modal--small',
    });
    modal.present();
  }

}
