import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ padding: "20px 0" }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" href="#">
            <img src={logo} alt="" height={50} />
          </Link>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav  mb-2 mb-lg-0"
              style={{ marginLeft: "120px" }}
            >
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  How it works
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Trading
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Academy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
