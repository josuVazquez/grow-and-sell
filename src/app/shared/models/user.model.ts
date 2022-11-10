export class User {
    uid: string;
    email: string;
    name: string;
    photoURL: string;
    phone: string;
    rating: number;
    lat: string;
    lng: string;

    constructor(data: Partial<User | any> = {}) {
        if(!data) {
            return;
        }

        this.uid = data.uid;
        this.email = data.email;
        this.name = data.displayName;
        this.phone = data.phone;
        this.rating = data.rating;
        this.photoURL = data.photoURL;
        this.lat = data.lat;
        this.lng = data.lng;
    }
}
