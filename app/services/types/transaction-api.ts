import { User } from "./user";


export interface APITransactionsResponseV1 {
    transactions: APITransactionV1[];
}

export interface APITransactionV1 {
    id: string,
    title: string,
    date: string, // TODO: needs to be data object
    totalPrice: number,
    owner: User,
    contributors: User[],
    // TODO: 
    // items: Item[] // dont like that name but yeah

}


