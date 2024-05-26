import { RequestFallback, RequestParameters, Response } from "../data/typing";
import request from "../lib/request";

export class Service {
    protected static async send<T>(parameters: RequestParameters): Response<T> {
        return await request<T>(parameters).catch(this.handleError);
    }

    protected static handleError(error: Error): RequestFallback {
        return {
            errorMessage: "message" in error ? error.message : "Unknown error",
        };
    }
}
