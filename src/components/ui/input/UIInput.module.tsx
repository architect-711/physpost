import { UIInputProps } from "../../../data/typing";

const UIInput = (props: UIInputProps) => {
    return (
        <input
            className={`form-control ${props.className} ${
                props.isError ? "mt-2 border border-danger" : ""
            }`}
            type={props.type || "text"}
            placeholder={props.placeholder}
            onChange={props.onChange}
            id={props.id}
        />
    );
};

export default UIInput;
