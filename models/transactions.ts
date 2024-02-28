interface Transaction {
    transaction_id: number;
    transaction_type_id: number;
    amount: number;
    name: string;
    description?: string;
    category?: Category;
    date: Date;
    is_recurring: boolean;
    recurrency?: Recurrency;
    user_payment_method_id: number;
    expiration_id?: number;
    installments?: boolean;
    installments_payments?: number;
   }
   
   interface TransactionType {
    transaction_type_id: number;
    name: string;
    description?: string;
   }
   
   interface Category {
    category_id: number;
    category_type: number;
    name: string;
   }
   
   interface Recurrency {
    recurrency_id: number;
    name: string;
    interval: number;
   }