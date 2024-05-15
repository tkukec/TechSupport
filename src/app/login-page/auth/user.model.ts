export class User {
    name: string;
    surname:string;
    password: string;
    role: number;
    email: string;
    _id?: any;
    constructor(name: string, password: string, role: number, email:string,surname:string, id?: any) {
        this.name = name;
        this.password = password;
        this.role = role;
        this.email= email;
        this.surname=surname;
        this._id = id;
    }
}
