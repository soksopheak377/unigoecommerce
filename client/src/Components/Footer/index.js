import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row ">
          <div className="col d-flex align-items-center">
            <span>
              <LuShirt />
            </span>
            <span className="ml-2">Everyday fresh products</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="ml-2">Free deliver for orders over $70</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <RiDiscountPercentLine />
            </span>
            <span className="ml-2">Daily Mega Descount</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <CiBadgeDollar />
            </span>
            <span className="ml-2">Best Price on the market</span>
          </div>
        </div>

        <div className="row mt-4 linkWrap">
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h4>BREAKFAST & DAIRY</h4>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>


          <div className="col">
            <h4>MEAT & SEAFOOD</h4>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h4>BEVERAGES</h4>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h4>BREADS & BAKERY</h4>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright mt-3 pt-3 pb-3 d-flex">
    <p className="mb-0">Copyright 2026. All rights reserved</p>
    <ul className="list list-inline ml-auto mb-0">
        <li className="list-inline-item">
            <Link to="#"><FaFacebookF/></Link>
        </li>
        <li className="list-inline-item">
            <Link to="#"><FaTwitter/></Link>
        </li>
        <li className="list-inline-item">
            <Link to="#"><FaTelegramPlane/></Link>
        </li>
        <li className="list-inline-item">
            <Link to="#"><FaInstagram/></Link>
        </li>
        <li className="list-inline-item">
            <Link to="#"><AiFillWechat/></Link>
        </li>
    </ul>
</div>
      </div>
    </footer>
  );
};

export default Footer;
