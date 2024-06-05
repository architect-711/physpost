import { app } from "./app";

export const personAPI = {
    buildURL: function (endpoint: string): string {
        return app.backend.host + app.backend.root + this.route + endpoint;
    },
    route: "/person",
    get: {
        getOneById: "/get/by-id/",
        getOneByUsername: "/get/by-username",
        getOneByUsernameAndPassword:
            "/get/by-username-and-password/{username}/{password}",
    },
    post: {
        postOne: "/post/save_one",
    },
};

export const articleAPI = {
    buildURL: function (endpoint: string): string {
        return app.backend.host + app.backend.root + this.route + endpoint;
    },
    route: "/article",
    get: {
        getOneById: "/get/",
        getLastWithLimit: "/get/last?limit=",
        getWithTitleMatch: "/get/title?title=",
    },
    post: {
        postOne: "/post/save_one",
    },
    delete: {
        deleteOne: "/delete/",
    },
};

export const filesAPI = {
    buildURL: function (endpoint: string): string {
        return app.backend.host + app.backend.root + this.route + endpoint;
    },
    route: "/file",
    get: {
        getOneById: "/get/",
        getContentById: "/get/{id}/content",
    },
    post: {
        postOne: "/post/save_one",
        postOneDev: "/post/save_one_dev",
    },
    delete: {
        deleteOneById: "/delete/",
    },
};
