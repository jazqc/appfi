-- DropForeignKey
ALTER TABLE "User_payment_method" DROP CONSTRAINT "User_payment_method_user_id_fkey";

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "category_type" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "transaction_id" SERIAL NOT NULL,
    "transaction_type_id" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "is_recurring" BOOLEAN NOT NULL,
    "recurrency_id" INTEGER,
    "user_payment_method_id" INTEGER NOT NULL,
    "expiration_id" INTEGER,
    "installments" BOOLEAN,
    "installments_payments" INTEGER,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "Transaction_type" (
    "transaction_type_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Transaction_type_pkey" PRIMARY KEY ("transaction_type_id")
);

-- CreateTable
CREATE TABLE "Recurrency" (
    "recurrency_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "interval" INTEGER NOT NULL,

    CONSTRAINT "Recurrency_pkey" PRIMARY KEY ("recurrency_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Recurrency_name_key" ON "Recurrency"("name");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_transaction_type_id_fkey" FOREIGN KEY ("transaction_type_id") REFERENCES "Transaction_type"("transaction_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_recurrency_id_fkey" FOREIGN KEY ("recurrency_id") REFERENCES "Recurrency"("recurrency_id") ON DELETE SET NULL ON UPDATE CASCADE;
