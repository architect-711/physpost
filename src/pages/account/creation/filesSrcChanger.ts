const FILES_SAVE_URL = "http://localhost:8080/v1/files/post";
const FILE_GET_PATH = "http://localhost:8080/v1/files/get";
interface File {
    id: number;
    articleId: number;
    authorId: number;
    name: string;
    content: string;
}

export default class FilesSaver {
    private readonly host: string = "blob:http://localhost:5173";
    private images: HTMLImageElement[] = [];

    public saveFiles(): void {
        const names: string[] = this.getBlobNames();

        if (names.length == 0) {
            return console.error("Internal error. No images.");
        }

        names.forEach((name) => {
            this.extractBlobFile(name).then((file) => this.send(file, name));
        });
    }

    private getBlobNames(): string[] {
        const filesNames: string[] = [];
        this.images = Array.from(document.querySelectorAll(".fr-fic"));

        this.images.forEach((image) => {
            if (
                !image.hasAttribute("data-url") &&
                "src" in image &&
                typeof image.src == "string"
            ) {
                filesNames.push(image.src.split("/")[3]);
            }
        });

        return filesNames;
    }

    private async extractBlobFile(name: string): Promise<Blob> {
        return await fetch(`${this.host}/${name}`).then((response) =>
            response.blob()
        );
    }

    private send(file: Blob, name: string): void {
        fetch(FILES_SAVE_URL, {
            body: this.makePayload(file, name),
            method: "POST",
        })
            .then((response) => response.json())
            .then((response) => this.assignRemoteURL(response, name))
            .catch((error) => alert(`Ошибка!\nПричина: ${error.message}`));
    }

    private makePayload(file: Blob, name: string): FormData {
        const formData = new FormData();

        formData.append("articleId", 1);
        formData.append("authorId", 1);
        formData.append("name", name);
        formData.append("file", file);

        return formData;
    }

    private assignRemoteURL(response: File, name: string): void {
        if (this.images.length <= 0) {
            return console.error("Images length is 0");
        }

        this.images.forEach((image) =>
            image.src.split("/")[3] == name
                ? (image.src = `${FILE_GET_PATH}/${response.id}/content`)
                : ""
        );
    }
}
