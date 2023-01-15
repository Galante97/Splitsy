import { User } from "./user";


export interface Transactions {
    transactions: Transaction[];
}

export interface Transaction {
    id: string,
    title: string,
    date: string, // TODO: needs to be data object
    totalPrice: number,
    owner: User,
    contributors: User[],
    // TODO: 
    // items: Item[] // dont like that name but yeah

}


