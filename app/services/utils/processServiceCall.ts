import { AxiosHttpError } from "./api";


export const processServiceCall = async <Return, ApiReturn>(
    fn: () => Return | PromiseLike<Return>,
    errorMapperFn?: (e: AxiosHttpError<ApiReturn>, res: ApiReturn) => Error,
): Promise<Return> => {
    try {
        return await Promise.resolve(fn());
    } catch (e) {
        throw e;
    }
}