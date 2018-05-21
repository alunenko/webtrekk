export class Customer {
    customerID: number;
    name: {
        first: string,
        last: string
    };
    birthday: string;
    gender: string;
    lastContact: string;
    customerLifetimeValue: number
}