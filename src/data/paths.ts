interface Paths {
    id: number;
    path: string;
    name: string;
}

const basePaths: Paths[] = [
    { id: 1, path: "/", name: "Главная" },
    { id: 2, path: "/articles", name: "Статьи" },
    { id: 3, path: "/about", name: "О нас" },
];

const loginPaths: Paths[] = [
    { id: 1, path: "/login", name: "Вход" },
    { id: 2, path: "/login", name: "Регистрация" },
];

export { basePaths, loginPaths };
