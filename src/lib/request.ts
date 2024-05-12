import axios, { AxiosResponse } from "axios";
import { RequestMethods } from "../data/typing";

export default function request<T>(
    method: RequestMethods,
    url: string,
    data?: unknown,
    postContentType?: string
): Promise<AxiosResponse<T, unknown>> {
    axios.defaults.headers.post["Content-Type"] = postContentType
        ? postContentType
        : "application/json";

    return axios({ url: url, method: method, data: data });
}
