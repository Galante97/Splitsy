
import { useQuery, UseQueryOptions } from "react-query"
import { fetchTransactionsByUserKeyV1 } from "../lib/transaction";
import { Transactions } from "../types/transaction";


export const useTransactionsByUserKeyQuery = (
    userKey: string,
    options?: UseQueryOptions<Transactions>,
) => {
    return useQuery<Transactions | undefined>(
        ['transactions', userKey],
        () => fetchTransactionsByUserKeyV1(userKey),
        options,
    );
}


// useAuctionByAuctionKeyQuery