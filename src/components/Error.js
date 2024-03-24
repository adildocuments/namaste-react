import { useRouteError } from "react-router-dom";

const Error = () =>{
    const error = useRouteError();
    return (
        <>
            <h1>Opps!!!</h1>
            <h2>Something went wrong!!!</h2>
            <div className="errors">
                <h2>{error.status} : {error.statusText}</h2>
            </div>
        </>
    )
}

export default Error;