import { personAPI } from "../data/api";
import { Person, Response } from "../data/typing";
import { Service } from "./Service";

export default class PersonService extends Service {
    public static async login(
        username: string,
        password: string
    ): Response<Person> {
        const URL: string = personAPI
            .buildURL(personAPI.get.getOneByUsernameAndPassword)
            .replace("{username}", username)
            .replace("{password}", password);

        return await this.send({ method: "GET", url: URL });
    }
}
