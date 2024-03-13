"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
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
    //   try {
    //       const transactionTypes = await prisma.transaction_type.createMany({
    //         data: [
    //           {
    //             en_name: "Expense",
    //             es_name: "Gasto"
    //           },
    //           {
    //               en_name: "Income",
    //               es_name: "Ingreso"
    //           },
    //           {
    //             en_name: "Ahorro/Inversión",
    //             es_name: "Saving/Investment"
    //           },
    //         ],
    //       });
    //       console.log(transactionTypes);
    //       prisma.$disconnect();
    //     } catch (error) {
    //       console.log(error);
    //       prisma.$disconnect();
    //     }
    //Categorías
    try {
        const categories = yield prisma.category.createMany({
            data: [
                {
                    transaction_type_id: 1,
                    en_name: "Housing",
                    es_name: "Vivienda"
                },
                {
                    transaction_type_id: 1,
                    en_name: "Food",
                    es_name: "Alimentación"
                },
                {
                    transaction_type_id: 1,
                    en_name: "Transportation",
                    es_name: "Transporte"
                },
                {
                    transaction_type_id: 1,
                    en_name: "Health",
                    es_name: "Salud"
                },
                {
                    transaction_type_id: 1,
                    en_name: "Entertainment",
                    es_name: "Entretenimiento"
                },
                {
                    transaction_type_id: 1,
                    en_name: "Education",
                    es_name: "Educación"
                },
                {
                    transaction_type_id: 1,
                    en_name: "Personal Care",
                    es_name: "Cuidado personal"
                },
                {
                    transaction_type_id: 1,
                    en_name: "Gifts",
                    es_name: "Regalos"
                },
                {
                    transaction_type_id: 1,
                    en_name: "Clothing",
                    es_name: "Vestimenta"
                },
                {
                    transaction_type_id: 1,
                    en_name: "Social outings",
                    es_name: "Salidas"
                },
                {
                    transaction_type_id: 1,
                    en_name: "Debts",
                    es_name: "Deudas"
                },
                {
                    transaction_type_id: 1,
                    en_name: "Other expense",
                    es_name: "Otro gasto"
                },
                {
                    transaction_type_id: 2,
                    en_name: "Salary",
                    es_name: "Salario"
                },
                {
                    transaction_type_id: 2,
                    en_name: "Sale",
                    es_name: "Venta"
                },
                {
                    transaction_type_id: 2,
                    en_name: "Interests & Investment Income",
                    es_name: "Intereses y ganancia de inversiones"
                },
                {
                    transaction_type_id: 2,
                    en_name: "Rent",
                    es_name: "Renta"
                },
                {
                    transaction_type_id: 2,
                    en_name: "Other income",
                    es_name: "Otro ingreso"
                },
                {
                    transaction_type_id: 3,
                    en_name: "Equity income",
                    es_name: "Renta variable"
                },
                {
                    transaction_type_id: 3,
                    en_name: "Fixed income",
                    es_name: "Renta fija"
                },
                {
                    transaction_type_id: 3,
                    en_name: "Foreign Currency",
                    es_name: "Moneda extranjera"
                },
                {
                    transaction_type_id: 3,
                    en_name: "Emergency fund",
                    es_name: "Fondo de emergencia"
                },
                {
                    transaction_type_id: 3,
                    en_name: "Cryptocurrencies",
                    es_name: "Criptomonedas"
                },
                {
                    transaction_type_id: 3,
                    en_name: "Other saving",
                    es_name: "Otro ahorro"
                },
            ],
        });
        console.log(categories);
        prisma.$disconnect();
    }
    catch (error) {
        console.log(error);
        prisma.$disconnect();
    }
});
main();
//# sourceMappingURL=seeds.js.map