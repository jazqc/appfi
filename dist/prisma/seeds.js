"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// const main = async () => {
//métodos de pago
// try {
//   const paymentMethods = await prisma.payment_method.createMany({
//     data: [
//       {
//         en_name: "Credit",
//         es_name: "Crédito"
//       },
//       {
//           en_name: "Debit",
//           es_name: "Débito"
//       },
//       {
//         en_name: "Cash",
//         es_name: "Efectivo"
//       },
//     ],
//   });
//   console.log(paymentMethods);
//   prisma.$disconnect();
// } catch (error) {
//   console.log(error);
//   prisma.$disconnect();
// }
//Transaction type
// try {
//     const transactionTypes = await prisma.transaction_type.createMany({
//       data: [
//         {
//           en_name: "Expense",
//           es_name: "Gasto"
//         },
//         {
//             en_name: "Income",
//             es_name: "Ingreso"
//         },
//         {
//           en_name: "Ahorro/Inversión",
//           es_name: "Saving/Investment"
//         },
//       ],
//     });
//     console.log(transactionTypes);
//     prisma.$disconnect();
//   } catch (error) {
//     console.log(error);
//     prisma.$disconnect();
//   }
//Categorías
// try {
//   const categories = await prisma.category.createMany({
//     data: [
// {
//   transaction_type_id: 1,
//   en_name: "Housing",
//   es_name: "Vivienda"
// },
// {
//   transaction_type_id: 1,
//     en_name: "Food",
//     es_name: "Alimentación"
// },
// {
//   transaction_type_id: 1,
//   en_name: "Transportation",
//   es_name: "Transporte"
// },
// {
//   transaction_type_id: 1,
//   en_name: "Health",
//   es_name: "Salud"
// },
// {
//   transaction_type_id: 1,
//   en_name: "Entertainment",
//   es_name: "Entretenimiento"
// },
// {
//   transaction_type_id: 1,
//   en_name: "Education",
//   es_name: "Educación"
// },
// {
//   transaction_type_id: 1,
//   en_name: "Personal Care",
//   es_name: "Cuidado personal"
// },
// {
//   transaction_type_id: 1,
//   en_name: "Gifts",
//   es_name: "Regalos"
// },
// {
//   transaction_type_id: 1,
//   en_name: "Clothing",
//   es_name: "Vestimenta"
// },
// {
//   transaction_type_id: 1,
//   en_name: "Social outings",
//   es_name: "Salidas"
// },
// {
//   transaction_type_id: 1,
//   en_name: "Debts",
//   es_name: "Deudas"
// },
// {
//   transaction_type_id: 1,
//   en_name: "Other expense",
//   es_name: "Otro gasto"
// },
// {
//   transaction_type_id: 2,
//   en_name: "Salary",
//   es_name: "Salario"
// },
// {
//   transaction_type_id: 2,
//   en_name: "Sale",
//   es_name: "Venta"
// },
// {
//   transaction_type_id: 2,
//   en_name: "Interests & Investment Income",
//   es_name: "Intereses y ganancia de inversiones"
// },
// {
//   transaction_type_id: 2,
//   en_name: "Rent",
//   es_name: "Renta"
// },
// {
//   transaction_type_id: 2,
//   en_name: "Other income",
//   es_name: "Otro ingreso"
// },
// {
//   transaction_type_id: 3,
//   en_name: "Equity income",
//   es_name: "Renta variable"
// },
// {
//   transaction_type_id: 3,
//   en_name: "Fixed income",
//   es_name: "Renta fija"
// },
// {
//   transaction_type_id: 3,
//   en_name: "Foreign Currency",
//   es_name: "Moneda extranjera"
// },
// {
//   transaction_type_id: 3,
//   en_name: "Emergency fund",
//   es_name: "Fondo de emergencia"
// },
// {
//   transaction_type_id: 3,
//   en_name: "Cryptocurrencies",
//   es_name: "Criptomonedas"
// },
// {
//   transaction_type_id: 3,
//   en_name: "Other saving",
//   es_name: "Otro ahorro"
// },
//   ],
// });
//   console.log(categories);
//   prisma.$disconnect();
// } catch (error) {
//   console.log(error);
//   prisma.$disconnect();
// }
// }
// try {
//   const recurrency = await prisma.recurrency.createMany({
//     data: [
//       {
//         en_name: "Annual",
//         es_name: "Anual",
//         interval: "year",
//       },
//       {
//         en_name: "Monthly",
//         es_name: "Mensual",
//         interval: "month",
//       },
//       {
//         en_name: "Weekly",
//         es_name: "Semanal",
//         interval: "week",
//       },
//       {
//         en_name: "Daily",
//         es_name: "Diario",
//         interval: "day",
//       },
//     ],
//   });
//   console.log(recurrency);
//   await prisma.$disconnect();
// } catch (error) {
//   console.log(error);
//   await prisma.$disconnect();
// }
// }
// main();
//# sourceMappingURL=seeds.js.map