import { useNavigate } from "react-router-dom";
import './error.css'

const ErrorPage = () => {
    let navigate = useNavigate();

    return (
        <div id="notfound">
            <div className="notfound main">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <button
                    onClick={() => {
                        navigate('/')
                    }}
                >Go To Homepage</button>
            </div>
        </div>
    )
}

export default ErrorPage;