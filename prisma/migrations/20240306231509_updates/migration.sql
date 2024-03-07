/*
  Warnings:

  - Added the required column `closing_day` to the `Expirations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtype` to the `User_payment_method` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Expirations_user_pm_id_key";

-- AlterTable
ALTER TABLE "Expirations" ADD COLUMN     "closing_day" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User_payment_method" ADD COLUMN     "subtype" TEXT NOT NULL;
