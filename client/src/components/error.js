import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg"
import { Link } from "react-router-dom"

function Error() {
    return <Wrapper className="full-page">
        <div>
            <img src={img} alt="Not found image" />
            <h3>Ohh! Page not found</h3>
            <p>The page you are looking for is not found here</p>
            <Link to="/">Back Home</Link>
        </div>
    </Wrapper>;
}

export default Error;
