export class Details {

     name: string;
     gender: string;
     collegename: string;
     department: string;
     username: string;
     password: string;
     email: string;
     phoneno: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
