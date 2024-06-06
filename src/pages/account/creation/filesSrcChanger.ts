import { filesAPI } from "../../../data/api";
import { File } from "../../../data/typing";
import FilesService from "../../../services/FileService";

export default class FilesSaver {
    private readonly BLOB_HOST: string = "blob:http://localhost:5173";
    private images: HTMLImageElement[] = [];

    public async saveFiles(): Promise<void> {
        const names: string[] = this.getBlobNames();

        if (names.length == 0) {
            return; 
        }

        names.forEach(async (name) => {
            await this.extractBlobFile(name).then((file) =>
                this.send(file, name)
            );
        });
    }

    private getBlobNames(): string[] {
        const filesNames: string[] = [];
        this.images = Array.from(document.querySelectorAll(".fr-fic"));

        this.images.forEach((image) => {
            if ("src" in image && image.src.startsWith("blob")) {
                // the last (3) is the name
                filesNames.push(image.src.split("/")[3]);
            }
        });

        return filesNames;
    }

    private async extractBlobFile(name: string): Promise<Blob> {
        return await (await fetch(new URL(`${this.BLOB_HOST}/${name}`))).blob();
    }

    private send(file: Blob, name: string): void {
        FilesService.saveOne(this.makePayload(file, name))
            .then((response) => {
                if ("errorMessage" in response) {
                    throw new Error(
                        "Something went wrong. Message: " +
                            response.errorMessage
                    );
                }
                this.assignRemoteURL(response.data, name);
            })
            .catch((error) => {
                throw new Error(error.message);
            });

        // fetch(FILES_SAVE_URL, {
        //     body: this.makePayload(file, name),
        //     method: "POST",
        // })
        //     .then((response) => response.json())
        //     .then((response) => this.assignRemoteURL(response, name))
        //     .catch((error) => alert(`Ошибка!\nПричина: ${error.message}`));
    }

    private makePayload(file: Blob, name: string): FormData {
        const formData = new FormData();

        // there were just numbers before, can't make build if error so I change to strings
        // formData.append("authorId", "1");
        // formData.append("articleId", "1");
        // formData.append("name", name);
        formData.append("file", file);

        console.log(formData.get("file"));

        return formData;
    }

    private assignRemoteURL(response: File, name: string): void {
        if (this.images.length <= 0) {
            return console.error("Images length is 0");
        }

        this.images.forEach((image) =>
            image.src.split("/")[3] == name
                ? (image.src = `${filesAPI.buildURL(
                      filesAPI.get.getContentById
                  )}/${response.id}/content`)
                : ""
        );
    }
}
