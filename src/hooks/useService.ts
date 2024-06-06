import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { RequestFallback, Response } from "../data/typing";

interface UseService<T> {
    promise: () => Response<T> | undefined, 
    successCallback: (response: AxiosResponse<T>) => void, 
    errorCallback: (response: RequestFallback) => void
}

export function useService<T>({ promise, successCallback, errorCallback }: UseService<T>): void {
    const promiseResult = promise();
    
    if (typeof promiseResult === "undefined") return;

    promiseResult.then((response) => {
        if ("errorMessage" in response) throw new Error(response.errorMessage);
    
        successCallback(response);  
    }).catch(errorCallback);
}

export function useServiceEffect<T>({ promise, successCallback, errorCallback }: UseService<T>): void {
    useEffect(() => {
        useService<T>({ promise, successCallback, errorCallback });
    }, []);
}