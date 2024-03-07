import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const main = async () => {

  try {
    const paymentMethods = await prisma.payment_method.createMany({
      data: [
        {
          en_name: "Credit",
          es_name: "Crédito"
        },
        {
            en_name: "Debit",
            es_name: "Débito"
        },
        {
          en_name: "Cash",
          es_name: "Efectivo"
        },
      ],
    });
    console.log(paymentMethods);
    prisma.$disconnect();
  } catch (error) {
    console.log(error);
    prisma.$disconnect();
  }
};

main();