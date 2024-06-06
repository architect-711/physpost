import { RequestFallback, RequestParameters, Response } from "../data/typing";
import request from "../lib/request";

export class Service {
    protected static async send<D>(parameters: RequestParameters): Response<D> {
        return await request<D>(parameters).catch(this.handleError);
    }

    protected static handleError(error: Error): RequestFallback {
        return {
            errorMessage: "message" in error ? error.message : "Unknown error",
        };
    }
}
