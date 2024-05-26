import { app } from "../data/app";
import { Endpoints } from "../data/typing";

export class APIBuilder<T extends Endpoints> {
    private readonly HOST: string = app.backend.host;
    private readonly ROOT: string = app.backend.root;
    public readonly ENDPOINTS: Endpoints;

    constructor(ENDPOINTS: T) {
        this.ENDPOINTS = ENDPOINTS;
    }

    public buildURL(endpoint: string): string {
        return this.HOST + this.ROOT + endpoint;
    }

    public getHost(): string {
        return this.HOST;
    }

    public getRoot(): string {
        return this.ROOT;
    }

    public getEndpoints(): Endpoints {
        return this.ENDPOINTS;
    }
}
