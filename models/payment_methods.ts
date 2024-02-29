import { IUser } from "../models/user";


export interface IPaymentMethod {
    pm_type_id: number;
    name: string;  //Credit, Debit, Cash Cargados en DB
    user_payment_methods: IUserPaymentMethod[];
  }
  
export interface IUserPaymentMethod {
    user_pm_id: number;
    user_id: number;
    type_id: number;
    name: string;
    description?: string;
    set_alarm: boolean;
    payment_method: IPaymentMethod;
    expiration?: IExpiration; 
  }
  
export interface IExpiration {
    expiration_id: number;
    expiration_day: Date;
    user_pm_id: number;
    user_payment_method: IUserPaymentMethod;
  }

  