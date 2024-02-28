import { IUserPaymentMethod } from "./payment_methods";


export interface IUser {
    user_id: number;
    username: string;
    password: string;
    rol: string; 
    email: string;
    name: string;
    last_name: string;
    birth_date: string;
    family_in_charge?: number;
    user_payment_methods?: IUserPaymentMethod[]; 
    // transactions: ITransaction[]; 
  }

  