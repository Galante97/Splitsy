import { APITransactionsResponseV1 } from "../../types/transaction-api";
import { userMock, userMockList } from "./user-mock";

export const transactionsMock: APITransactionsResponseV1 = {
    transactions: [{
        id: '1',
        title: "Pilsner Haus",
        date: 'Aug 12th',
        totalPrice: 250.44,
        owner: userMock,
        contributors: userMockList,
    }]
}