
import { MdClose } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { Dialog, Fade, Rating, Button } from "@mui/material";
import { BiGitCompare } from "react-icons/bi";
import QuantityBox from "../QuantityBox";
import ProductZoom from "../ProductZoom";

const ProductModal = (props) => {
  return (
    <>
      <Dialog
        open={true}
        className="productModal"
        onClose={() => props.closeProuctModal()}
      >
        <button className="close_" onClick={() => props.closeProuctModal()}>
          <MdClose />
        </button>
        <h4 className="mb-0">All Natural Italian-Style Chicken Meatballs</h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
          </div>

          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>
        <hr />

        <div className="row mt-2 productDetaileModal">
          <div className="col-md-5">
            <ProductZoom/>
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-2">$9.35</span>
              <span className="netPrice text-danger lg">$7.25</span>
            </div>
            <span className="badge bg-success">IN STOCK</span>

            <p className="mt-3">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>

            <div className="d-flex align-items-center">
              {/* quantitybox */}
              <QuantityBox />
              <Button className="btn-addcart btn-blue btn-lg btn-round ml-3">
                <IoCartSharp size="20"/> &nbsp; Add to Cart
              </Button>
            </div>
            <div className="d-flex align-items-center mt-4 actions">
              <Button className="btn-round btn-outlet" variant="outlined">
                <CiHeart/> &nbsp; ADD TO WISHLIST
              </Button>
              <Button className="btn-round btn-outlet" variant="outlined">
                <BiGitCompare/> &nbsp; COMPARE
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
