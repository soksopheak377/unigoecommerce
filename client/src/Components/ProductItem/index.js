import React, { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { SlSizeFullscreen } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import ProductModal from "../ProductModal";

const ProdctItem = (props) => {
  const [value, setValue] = React.useState(2);
  const [isOpenProductModal, setisOpenProductModal] = useState(false);

  // view product detail
  const viewProductDetail = (id) => {
    setisOpenProductModal(true);
  };

  const closeProuctModal=()=>{
    setisOpenProductModal(false)
  }

  return (
    <>
      <div className={`item productItem itemView ${props.itemView}`}>
        <div className="imgWrapper mb-2">
          <img
            src="https://www.piindustries.com/wp-content/uploads/2025/03/aminogrow-active.png"
            className="w-100"
          />

          <span className="badge badge-primary">20%</span>
          <div className="actions">
            <button onClick={() => viewProductDetail(1)}>
              <SlSizeFullscreen />
            </button>
            <button>
              <CiHeart style={{ fontSize: "22px" }} />
            </button>
          </div>
        </div>
        <div className="productInfo info ">
          <h6 className="mb-0">Werther’s Original Caramel Hard Candies</h6>
          <span className="text-success text-sml d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={value}
            readOnly
            size="small"
            precision={0.5}
          />
          <p className="text-light text-sml mb-0">Smart Watch</p>
          <div className="d-flex align-items-center">
            <span className="oldPrice mr-2">$399.00</span>
            <span className="text-light text-sml" />
            <span className="netPrice text-danger">$380.00</span>
          </div>
        </div>
      </div>

      {/* product modal */}
      {
        isOpenProductModal===true && <ProductModal closeProuctModal={closeProuctModal} />
      }
    </>
  );
};

export default ProdctItem;
