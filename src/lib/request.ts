import axios, { AxiosResponse } from "axios";
import { AXIOS_TIMEOUT } from "../data/axiosTimeout";
import { RequestParameters } from "../data/typing";

export default function request<T>({
    url,
    method,
    data,
    postContentType,
}: RequestParameters): Promise<AxiosResponse<T, unknown>> {
    axios.defaults.headers.post["Content-Type"] = postContentType
        ? postContentType
        : "application/json";

    return axios({
        url: url,
        method: method,
        data: data,
        timeout: AXIOS_TIMEOUT,
    });
}
