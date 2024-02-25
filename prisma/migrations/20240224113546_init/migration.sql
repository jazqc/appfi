-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "family_in_charge" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Payment_method" (
    "user_pm_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "set_alarm" BOOLEAN NOT NULL,

    CONSTRAINT "Payment_method_pkey" PRIMARY KEY ("user_pm_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Payment_method" ADD CONSTRAINT "Payment_method_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
