/*
  Warnings:

  - The primary key for the `Payment_method` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `Payment_method` table. All the data in the column will be lost.
  - You are about to drop the column `set_alarm` on the `Payment_method` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `Payment_method` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Payment_method` table. All the data in the column will be lost.
  - You are about to drop the column `user_pm_id` on the `Payment_method` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Payment_method" DROP CONSTRAINT "Payment_method_user_id_fkey";

-- AlterTable
ALTER TABLE "Payment_method" DROP CONSTRAINT "Payment_method_pkey",
DROP COLUMN "description",
DROP COLUMN "set_alarm",
DROP COLUMN "type_id",
DROP COLUMN "user_id",
DROP COLUMN "user_pm_id",
ADD COLUMN     "pm_type_id" SERIAL NOT NULL,
ADD CONSTRAINT "Payment_method_pkey" PRIMARY KEY ("pm_type_id");

-- CreateTable
CREATE TABLE "User_payment_method" (
    "user_pm_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "set_alarm" BOOLEAN NOT NULL,

    CONSTRAINT "User_payment_method_pkey" PRIMARY KEY ("user_pm_id")
);

-- CreateTable
CREATE TABLE "Expirations" (
    "expiration_id" SERIAL NOT NULL,
    "expiration_day" TIMESTAMP(3) NOT NULL,
    "user_pm_id" INTEGER NOT NULL,

    CONSTRAINT "Expirations_pkey" PRIMARY KEY ("expiration_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Expirations_user_pm_id_key" ON "Expirations"("user_pm_id");

-- AddForeignKey
ALTER TABLE "User_payment_method" ADD CONSTRAINT "User_payment_method_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_payment_method" ADD CONSTRAINT "User_payment_method_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Payment_method"("pm_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expirations" ADD CONSTRAINT "Expirations_user_pm_id_fkey" FOREIGN KEY ("user_pm_id") REFERENCES "User_payment_method"("user_pm_id") ON DELETE RESTRICT ON UPDATE CASCADE;
