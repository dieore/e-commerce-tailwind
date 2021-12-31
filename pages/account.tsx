import { useContext } from "react";
import AppContext from "../AppContext";

const Account = () => {
    const { currentUser } = useContext<any>(AppContext);

    return (
        <div>
            Aca tendria que hacer una big card {currentUser?.uid}
        </div>
    )
};

export default Account;