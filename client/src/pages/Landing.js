import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <>
      <main>
        <nav>
          <img src={logo} alt="jobify" className="logo" />
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
      </div>
    </>
  );
};

export default Landing;
