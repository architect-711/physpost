import { filesAPI } from "../data/api";
import { File, Response } from "../data/typing";
import { Service } from "./Service";

export default class FilesService extends Service {
    public static async getById(id: number): Response<File> {
        return await this.send({
            method: "GET",
            url: filesAPI.buildURL(filesAPI.get.getOneById + id),
        });
    }

    public static async getContentById(id: number): Response<string> {
        return await this.send({
            method: "GET",
            url: filesAPI.buildURL(
                filesAPI.get.getContentById.replace("{id}", String(id))
            ),
        });
    }

    public static async saveOne(file: FormData): Response<File> {
        return await this.send({
            method: "POST",
            url: filesAPI.buildURL(filesAPI.post.postOneDev),
            data: file,
            // postContentType: "multipart/form-data",
        });
    }
}
