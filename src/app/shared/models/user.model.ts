export class User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  phone: string;
  rating: number;
  lat: string;
  lng: string;

  constructor(data: Partial<User | any> = {}) {
    this.uid = data.uid;
    this.email = data.email;
    this.displayName = data.displayName;
    this.phone = data.phone;
    this.rating = data.rating;
    this.photoURL = data.photoURL;
    this.lat = data.lat;
    this.lng = data.lng;
  }
}
