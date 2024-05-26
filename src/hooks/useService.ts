import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { RequestFallback } from "../data/typing";

// export default function useService<T>(
//     fn: Promise<AxiosResponse<T, unknown>>,
//     callBack: (datum: T) => void
// ): void {
//     useEffect(
//         () => {
//             if (typeof fn === "undefined" || fn === null) {
//                 return;
//             }

//             const getResponse = (): Promise<T> =>
//                 fn.then((response) => response.data);

//             const unwrapPromise = async (): Promise<void> => {
//                 callBack(await getResponse());
//             };

//             unwrapPromise();
//         },
//         [] /* DO NOT REMOVE EMPTY ARRAY OR GET INFINITY LOOP OF REQUESTS*/
//     );
// }

export function useServiceEffect<T>(
    promise: Promise<RequestFallback | AxiosResponse<T, any>>,
    successCallback: (response: AxiosResponse<T>) => void,
    errorCallback: (error: Error) => void
): void {
    useEffect(() => {
        promise
            .then((response) => {
                if ("errorMessage" in response) {
                    throw new Error(response.errorMessage);
                }
                successCallback(response);
            })
            .catch(errorCallback);
    }, []);
}

export function useService<T>(
    promise: Promise<RequestFallback | AxiosResponse<T, any>>,
    successCallback: (response: AxiosResponse<T>) => void,
    errorCallback: (error: Error) => void
): void {
    promise
        .then((response) => {
            if ("errorMessage" in response) {
                throw new Error(response.errorMessage);
            }
            successCallback(response);
        })
        .catch(errorCallback);
}
