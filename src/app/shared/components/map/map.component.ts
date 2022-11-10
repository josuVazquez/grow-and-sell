import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { ChangeLocationComponent } from '../change-location/change-location.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
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

  _getUser: Subscription;

  constructor(private modalController: ModalController, private userService: UserService) {
  }

  ngOnInit() {
    this.loadUserLocation()
  }

  async loadUserLocation() {
    this._getUser = this.userService._getUser().subscribe(user => {
      if(user.lat && user.lng) {
        console.log(user)
        const position = { coords: { latitude: user.lat, longitude: user.lng }}
        this.loadUserInfoIntoMap(position);
      } else {
        this.getCurrentLocation((position) => { this.loadUserInfoIntoMap(position); });
      }
    });
  }

  ngOnDestroy() {
    this._getUser.unsubscribe();
  }

  loadUserInfoIntoMap(position) {
    console.log(position)
    const latLng = {
      lat: +position.coords.latitude,
      lng: +position.coords.longitude
    };
    this.setMapData(latLng)
    this.getStreet(latLng);
  }

  getCurrentLocation(loadUserInfo) {
    navigator.geolocation.getCurrentPosition(loadUserInfo);
  }

  setMapData(latLng) {
    this.center = latLng;
    this.marker = {
      position: latLng,
      label: {
        color: 'red',
      }
    };
  }

  getStreet(latLng) {
    this.geocoder
    .geocode({ location: latLng })
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
