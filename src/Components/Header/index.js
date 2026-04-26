import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png"; // adjust the path based on your project structure
import CountryDropdown from "../CountryDropdown";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import SearhchBox from "./SearchBox";
import Navbar from "./Navigation";
import { use, useContext } from "react";
import { AppContext } from "../../App";

const Header = () => {

  const contries = useContext(AppContext);

  return (
    <div className="headerWrapper">
      <div className="top-strip bg-blue py-1">
        <p className="mb-0 mt-0 text-center">
          Due to the <b>COVID 19</b>
          epidemic, orders may be processed with a slight delay
        </p>
      </div>

      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to="/">
                <img src={logo} className="logo" alt=""  />
              </Link>
            </div>

            <div className="col-sm-10 d-flex align-items-center part2">

              {/* show country list */}
              {
                contries.countryList.length !==0 ? <CountryDropdown /> : null
              }

              {/* Header Search Start Here */}
              <SearhchBox />
              {/* Header Search ends Here */}

              <div className="part3 d-flex align-items-center ml-auto">
                <Button className="circle mr-3">
                  <FiUser />
                </Button>
                <div className="ml-auto cartTab d-flex align-items-center">
                  <span className="price">$3.29</span>
                  <div className="position-relative ml-2">
                    <Button className="circle">
                      <IoBagOutline />
                    </Button>
                    <span className="count d-flex align-items-center justify-content-center">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Navbar />
    </div>
  );
};

export default Header;
