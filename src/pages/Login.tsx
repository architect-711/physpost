import { ChangeEvent, useEffect, useState } from "react";
import { Form, NavLink, useNavigate } from "react-router-dom";
import UIInput from "../components/ui/input/UIInput.module";
import PersonService from "../services/PersonService";
import { enforceLoginFormToCenter } from "../utils/enforceLoginFormToCenter";
import { checkPerson } from "../utils/personChecker";

interface Form {
    username: string;
    password: string;
}

export default function Login() {
    const [isError, setIsError] = useState<boolean>(false);
    const navigate = useNavigate();
    const [form, setForm] = useState<Form>({
        username: "",
        password: "",
    });

    useEffect(() => {
        if (checkPerson()) {
            navigate("/account");
        }

        const cleanup = enforceLoginFormToCenter();

        return () => cleanup();
    }, []);

    // TODO: do error handling
    const login = async (): Promise<void> => {
        if ((form.password || form.username).length == 0) {
            return setIsError(true);
        }

        PersonService.login(form.username, form.password).then((response) => {
            if ("errorMessage" in response) {
                return setIsError(true);
            }

            localStorage.setItem("user", JSON.stringify(response.data));

            navigate("/account");
        });
    };

    const handleOnUsernameInputChange = (
        event: ChangeEvent<HTMLInputElement>,
        key: keyof Form
    ): void => setForm({ ...form, [key]: event.target.value.trim() });

    return (
        <main className="form-signin w-100 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">Вход</h1>
                <NavLink to="/">Главная</NavLink>

                <div className="form-floating">
                    <UIInput
                        onChange={(event) =>
                            handleOnUsernameInputChange(event, "username")
                        }
                        id="floatingInput"
                        placeholder="Имя пользователя"
                        isError={isError}
                        additionalClassName="mb-2"
                    />
                    <label htmlFor="floatingInput">Имя пользователя</label>
                </div>
                <div className="form-floating">
                    <UIInput
                        type="password"
                        onChange={(event) =>
                            handleOnUsernameInputChange(event, "password")
                        }
                        isError={isError}
                        id="floatingPassword"
                        placeholder="Пароль"
                    />
                    <label htmlFor="floatingPassword">Пароль</label>
                </div>

                <button
                    onClick={login}
                    className="btn btn-primary w-100 py-2 mt-4"
                    type="button"
                >
                    Войти
                </button>
                <p className="mt-5 mb-3 text-body-secondary">© 2024</p>
            </form>
        </main>
    );
}
