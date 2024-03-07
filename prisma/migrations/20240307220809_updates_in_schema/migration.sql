/*
  Warnings:

  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Payment_method` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Transaction_type` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[en_name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[es_name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[en_name]` on the table `Transaction_type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[es_name]` on the table `Transaction_type` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `en_name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `es_name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Expirations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `en_name` to the `Payment_method` table without a default value. This is not possible if the table is not empty.
  - Added the required column `es_name` to the `Payment_method` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Payment_method` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Recurrency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `en_name` to the `Transaction_type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `es_name` to the `Transaction_type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Transaction_type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User_payment_method` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "en_name" TEXT NOT NULL,
ADD COLUMN     "es_name" TEXT NOT NULL,
ADD COLUMN     "icon" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Expirations" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Payment_method" DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "en_name" TEXT NOT NULL,
ADD COLUMN     "es_name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Recurrency" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Transaction_type" DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "en_name" TEXT NOT NULL,
ADD COLUMN     "es_name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User_payment_method" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_en_name_key" ON "Category"("en_name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_es_name_key" ON "Category"("es_name");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_type_en_name_key" ON "Transaction_type"("en_name");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_type_es_name_key" ON "Transaction_type"("es_name");
