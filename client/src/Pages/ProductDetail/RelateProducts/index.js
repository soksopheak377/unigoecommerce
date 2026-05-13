import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

// import product item
import ProductItem from "../../../Components/ProductItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { IoIosArrowRoundForward } from "react-icons/io";

const RelateProducts = (props) => {
    return (
        <>
            <div className="d-flex align-items-center">
                <div className="info w-75">
                    <h3 className="mb-0 hd">{props.title || "RELATE PRODUCTS"}</h3>
                </div>
                <button className="viewAllBtn ml-auto">
                    view all <IoIosArrowRoundForward />
                </button>
            </div>

            <div className="product_row w-100 mt-4">
                <Swiper
                    slidesPerView={5}
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
        </>
    )
}

export default RelateProducts;