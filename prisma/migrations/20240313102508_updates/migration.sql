/*
  Warnings:

  - You are about to drop the column `category_type` on the `Category` table. All the data in the column will be lost.
  - Added the required column `transaction_type_id` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "category_type",
ADD COLUMN     "transaction_type_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_transaction_type_id_fkey" FOREIGN KEY ("transaction_type_id") REFERENCES "Transaction_type"("transaction_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;
