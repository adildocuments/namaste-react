import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
    const {loggedInUser} = useContext(UserContext);
    return (
        <>
            <h1>This is contact page.</h1>
            <p>{loggedInUser}</p>
        </>
    )
}

export default Contact;