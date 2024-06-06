// force bootstrap center form
export const enforceLoginFormToCenter = (): (() => void) => {
    const centeringClass =
        "d-flex align-items-center py-4 bg-body-tertiary justify-content-center";

    // document.body.classList.add(centeringClass); // doesnt work

    centeringClass
        .split(" ")
        .forEach((classPart) => document.body.classList.add(classPart));

    return () => {
        centeringClass
            .split(" ")
            .forEach((classPart) => document.body.classList.remove(classPart));
    };
};
