

// postPlaceAuctionBidV1
// await fetchClient
//fetchAucionBidHistoryV1

import { AxiosRequestConfig } from "axios"
import { Transactions } from "../types/transaction"
import { APITransactionsResponseV1 } from "../types/transaction-api"
import { fetchClient } from "../utils/api"
import { deepCloneMapper } from "../utils/deepCloneMapper"
import { buildEndpoint, Endpoints } from "../utils/endpoints"
import { processServiceCall } from "../utils/processServiceCall"

// TODO: will eventually need to be updated for environments
const baseUrl = 'http://localhost:19006/'

const defaultOptions: AxiosRequestConfig = {
    headers: { 'Content-Type': 'application/json' }
}

export const fetchTransactionsByUserKeyV1 = (userKey: string) => {
    return processServiceCall(async () => {
        const apiResponse = (
            await fetchClient(
                baseUrl
            ).get<APITransactionsResponseV1>(
                buildEndpoint(Endpoints.TransactionsByUserKeyV1, { userKey }),
                { ...defaultOptions }
            )
        ).data;

        return deepCloneMapper<APITransactionsResponseV1, Transactions>(
            apiResponse,
            (from) => from
        )
    })


}

// 'Promise<AxiosResponse<APITransactionsResponseV1, any>>'