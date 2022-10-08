export class User {
    uid: string;
    email: string;
    name: string;
    photoURL: string;
    phone: string;
    rating: number;

    constructor(data: Partial<User | any> = {}) {
        this.uid = data.uid;
        this.email = data.email;
        this.name = data.displayName;
        this.phone = data.phone;
        this.rating = data.rating;
        this.photoURL = data.photoURL;
    }
}
