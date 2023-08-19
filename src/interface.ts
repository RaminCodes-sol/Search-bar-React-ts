interface Address {
    city: string;
    geo: { lat: string; lng: string };
    street: string;
    suite: string;
    zipcode: string;
}
    
interface Company {
    bs: string;
    catchPhrase: string;
    name: string;
}

export interface IUser {
    address: Address;
    company: Company;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}