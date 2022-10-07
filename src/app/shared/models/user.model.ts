export class User {
    uid: string;
    email: string;
    name: string;
    photoURL: string;
    accessToken: string;
    idToken: string;
    emailVerified: boolean;

    constructor(data: Partial<User | any> = {}) {
        this.uid = data.uid;
        this.email = data.email;
        this.name = data.displayName;
        this.photoURL = data.photoURL;
        this.emailVerified = data.emailVerified;
        this.accessToken = data.accessToken;
        this.idToken = data.idToken;
    }
}
