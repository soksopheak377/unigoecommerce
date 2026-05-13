import Homebanner from "../../Components/Homebanner";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import Button from "@mui/material/Button";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

// import product item
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import { Button } from "bootstrap";

const Home = () => {
  var productSliderOption = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="homeBannerSection">
      <Homebanner />

      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="sticky">
                <div className="banner">
                  <img
                    src="https://img.freepik.com/free-vector/realistic-vertical-poster-with-two-tins-natural-baked-beans-tomatoes_1284-59258.jpg?semt=ais_incoming&w=740&q=80"
                    className="cursor"
                  />
                </div>

                <div className="banner mt-4">
                  <img
                    src="https://img.freepik.com/free-vector/stylish-rollup-standee-page-banner-company-branding_1017-59820.jpg?semt=ais_incoming&w=740&q=80"
                    className="cursor"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <button className="viewAllBtn ml-auto">
                  view all <IoIosArrowRoundForward />
                </button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* new products */}
              <div className="d-flex align-items-center mt-4">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml">
                    New products are added every week. Check out our latest
                    collection.
                  </p>
                </div>
                <button className="viewAllBtn ml-auto">
                  view all <IoIosArrowRoundForward />
                </button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>

              {/* banner center screen */}
              <div className="d-flex align-items-center mt-4 gapImg">
                <div className="banner">
                  <img
                    src="https://brandripe.com/storage/media_files/blog6/1-%20Size%20and%20placement%20matter.jpg"
                    className="cursor"
                  />
                </div>

                <div className="banner ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4q47_UGMarRgj_XFeMr8UTur5UcVz4zuxpw&s"
                    className="cursor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">$20 discount for your first order</p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on promotions and
                coupons.
              </p>

              <form>
                <IoMailOutline />

                <input type="text" placeholder="Your Email Addrsss"/>
                <Button>Subscribe</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src="https://kapilvastufoods.com/wp-content/uploads/2021/04/coupon.png"></img>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
