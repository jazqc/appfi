import { IUser } from "../models/user";


export interface IPaymentMethod {
    pm_type_id: number;
    en_name: string;
    es_name: string;  //Credit, Debit, Cash Cargados en DB
    user_payment_methods: IUserPaymentMethod[];
    createdAt: Date;
 updatedAt: Date;
  }
  
export interface IUserPaymentMethod {
    user_pm_id: number;
    user_id: number;
    type_id: number;
    subtype: string;
    name: string;
    description?: string;
    set_alarm: boolean;
    payment_method: IPaymentMethod;
    expiration?: IExpiration;
    createdAt: Date;
 updatedAt: Date;
  }
  
export interface IExpiration {
    expiration_id: number;
    closing_day: Date;
    expiration_day: Date;
    user_pm_id: number;
    user_payment_method: IUserPaymentMethod;
    createdAt: Date;
 updatedAt: Date;
  }

  