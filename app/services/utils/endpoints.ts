import { generatePath as internalGeneratePath, ParamParseKey } from 'react-router';


export const Endpoints = {
    TransactionsByUserKeyV1: 'api/v1/transactions/:userKey'
} as const;

export type Endpoints = typeof Endpoints[keyof typeof Endpoints];

export function buildEndpoint<T extends string = Endpoints>(
    path: T,
    params?: { [key in ParamParseKey<T>]: string },

) { return internalGeneratePath(path, params); }

