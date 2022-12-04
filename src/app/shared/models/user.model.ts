export class User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    phoneNumber: string;
    rating: number;
    lat: string;
    lng: string;
    favorites: Array<string>;

    constructor(data: Partial<User | any> = {}) {
        if(!data) {
            return;
        }

        this.uid = data.uid;
        this.email = data.email;
        this.displayName = data.displayName;
        this.phoneNumber = data.phoneNumber;
        this.rating = data.rating;
        this.photoURL = data.photoURL;
        this.lat = data.lat;
        this.lng = data.lng;
        this.favorites = data.favorites || [];
    }
}
