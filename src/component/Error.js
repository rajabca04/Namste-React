
import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>You have some error in your page...</h1>
            <span>{err.status}</span>
            <br />
            <p>{err.statusText}</p>
            <span>{err.message}</span>

        </div>

    )
}


export default Error