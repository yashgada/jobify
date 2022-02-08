import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo/>
        </nav>
      </main>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            quam ea quaerat molestias numquam. Nisi quaerat voluptas dolorum
            repellendus optio.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
