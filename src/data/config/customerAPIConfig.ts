import { API, CustomerAPIEndpoints } from "../typing";

const customerAPIConfig: API<CustomerAPIEndpoints> = {
    rootURL: "http://localhost:8082/v1/customer",
    endpoints: {
        getById: "/get",
        getByUsername: "/get",
        login: "/get",
        post: "/post",
        deleteById: "/delete",
    },
};

export default customerAPIConfig;
