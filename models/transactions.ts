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
    createdAt: Date;
 updatedAt: Date;
   }
   
   interface TransactionType {
    transaction_type_id: number;
    en_name: string;
    es_name: string;
    description?: string;
    transactions: Transaction[]; 
    categories: Category[];
    createdAt: Date;
    updatedAt: Date;
   }
   

   interface Category {
    category_id: number;
    en_name: string;
    es_name: string;
    icon?: string;
    transactions: Transaction[]; 
    transaction_type_id: number;
    transaction_type: TransactionType; 
    createdAt: Date;
    updatedAt: Date;
   }

   
   interface Recurrency {
    recurrency_id: number;
    en_name: string;
    es_name: string;
    interval: string;
    createdAt: Date;
 updatedAt: Date;
   }