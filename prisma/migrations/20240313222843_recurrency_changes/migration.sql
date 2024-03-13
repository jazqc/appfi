/*
  Warnings:

  - You are about to drop the column `name` on the `Recurrency` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[en_name]` on the table `Recurrency` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[es_name]` on the table `Recurrency` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `en_name` to the `Recurrency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `es_name` to the `Recurrency` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Recurrency_name_key";

-- AlterTable
ALTER TABLE "Recurrency" DROP COLUMN "name",
ADD COLUMN     "en_name" TEXT NOT NULL,
ADD COLUMN     "es_name" TEXT NOT NULL,
ALTER COLUMN "interval" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Recurrency_en_name_key" ON "Recurrency"("en_name");

-- CreateIndex
CREATE UNIQUE INDEX "Recurrency_es_name_key" ON "Recurrency"("es_name");
