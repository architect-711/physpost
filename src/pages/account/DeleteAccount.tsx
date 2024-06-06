import { useNavigate } from "react-router-dom";
import PersonService from "../../services/PersonService";

export default function DeleteAccount() {
    const service = new PersonService();
    const navigate = useNavigate();
    const customer = JSON.parse(localStorage.getItem("user")!);

    const deleteAccount = () => {
        // TODO 
    };

    return (
        <div className="p-4">
            <button
                onClick={deleteAccount}
                className="btn btn-primary d-inline-flex align-items-center"
            >
                delete
            </button>
            not work
        </div>
    );
}
