-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_user_payment_method_id_fkey" FOREIGN KEY ("user_payment_method_id") REFERENCES "User_payment_method"("user_pm_id") ON DELETE RESTRICT ON UPDATE CASCADE;
