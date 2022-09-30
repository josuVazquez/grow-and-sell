export class User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    accessToken: string;
    idToken: string;
    emailVerified: boolean;

    constructor(data: Partial<User> = {}) {
        this.uid = data.uid;
        this.email = data.email;
        this.displayName = data.displayName;
        this.photoURL = data.photoURL;
        this.emailVerified = data.emailVerified;
        this.accessToken = data.accessToken;
        this.idToken = data.idToken;
    }

    toObject() {
        return {
            uid: this.uid,
            email: this.email,
            displayName: this.displayName,
            photoURL: this.photoURL,
            emailVerified: this.emailVerified,
            accessToken: this.accessToken,
            idToken: this.idToken
        };
    }
}
