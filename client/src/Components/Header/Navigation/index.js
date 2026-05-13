import { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center d-flex"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="icon1 mr-2">
                  <IoMenuOutline />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>
              <div
                className={`slidebarNav shadow ${isOpen === true ? "open" : ""}`}
              >
                {/* Submenu content goes here */}
                <ul className="list list-unstyled ">
                  <li>
                    <Link to="/">
                      <button>Men <FaAngleRight className="ml-auto"/></button>
                    </Link>
                    <div className="submenu shadow">
                      <Link to="/">
                        <button>Clothing</button>
                      </Link>
                      <Link to="/">
                        <button>Footwear</button>
                      </Link>
                      <Link to="/">
                        <button>Watches</button>
                      </Link>
                      <Link to="/">
                        <button>Accessories</button>
                      </Link>
                      <Link to="/">
                        <button>Gifts</button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <button>Women  <FaAngleRight className="ml-auto"/></button>
                    </Link>

                    <div className="submenu shadow">
                      <Link to="/">
                        <button>Clothing</button>
                      </Link>
                      <Link to="/">
                        <button>Footwear</button>
                      </Link>
                      <Link to="/">
                        <button>Watches</button>
                      </Link>
                      <Link to="/">
                        <button>Accessories</button>
                      </Link>
                      <Link to="/">
                        <button>Gifts</button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <button>Beauty</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button>Watches</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button>Kids</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button>Gifts</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button>Men</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button>Women</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button>Beauty</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button>Watches</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button>Kids</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button>Gifts</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <button>Home</button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <button>Men</button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <button>Clothing</button>
                  </Link>
                  <Link to="/">
                    <button>Footwear</button>
                  </Link>
                  <Link to="/">
                    <button>Watches</button>
                  </Link>
                  <Link to="/">
                    <button>Accessories</button>
                  </Link>
                  <Link to="/">
                    <button>Gifts</button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <button>Women</button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <button>Clothing</button>
                  </Link>
                  <Link to="/">
                    <button>Footwear</button>
                  </Link>
                  <Link to="/">
                    <button>Watches</button>
                  </Link>
                  <Link to="/">
                    <button>Accessories</button>
                  </Link>
                  <Link to="/">
                    <button>Gifts</button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <button>Electronics</button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <button>Beauty</button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <button>Watches</button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <button>Kids</button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <button>Gifts</button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <button>Blog</button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <button>Contact Us</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
