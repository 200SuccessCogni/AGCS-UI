export interface Iuser {
    fullname: string;
    email: string;
    phoneNo?: string;
    business: Ibusiness;
    pmLevel: number; // 1 - Admin
}

export interface Ibusiness {
    businessName: string;
    address: string;
    businessUrl: string;
    domain: string;
    country?: string;
}
