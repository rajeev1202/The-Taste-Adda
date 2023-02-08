import { useRouteError } from 'react-router-dom';


const ErrorPage = () => {
const error = useRouteError();
console.log("error",error);
    return (
        <div>
            <h4>Ooops!</h4>
            <p>Something went wrong 😶</p>
            <p>{error.status +" " + error.statusText}</p>
        </div>
    )
}

export default ErrorPage;