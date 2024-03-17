interface ITransaction {
    transaction_id: number;
    transaction_type_id: number;
    amount: number;
    name: string;
    description?: string;
    category_id: number;
    date: Date;
    is_recurring: boolean;
    recurrency_id: number;
    user_payment_method_id: number;
    expiration_id?: number;
    installments?: boolean;
    installments_payments?: number;
    createdAt: Date;
 updatedAt: Date;
   }
   
   interface ITransactionType {
    transaction_type_id: number;
    en_name: string;
    es_name: string;
    description?: string;
    transactions: ITransaction[]; 
    categories: ICategory[];
    createdAt: Date;
    updatedAt: Date;
   }
   

   interface ICategory {
    category_id: number;
    en_name: string;
    es_name: string;
    icon?: string;
    transactions: ITransaction[]; 
    transaction_type_id: number;
    transaction_type: ITransactionType; 
    createdAt: Date;
    updatedAt: Date;
   }

   
   interface IRecurrency {
    recurrency_id: number;
    en_name: string;
    es_name: string;
    interval: string;
    createdAt: Date;
 updatedAt: Date;
   }