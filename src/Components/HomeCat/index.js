import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

const HomeCat = () => {
 const [itemBg, setItemBg] = useState([
  '#fffceb',
  '#ecffec',
  '#feefea',
  '#fff3eb',
  '#fff3ff',
  '#f2fce4',
  '#feefea',
  '#fffceb',
  '#feefea',
  '#ecffec',
  '#feefea',
  '#fff3eb',
  '#fff3ff',
  '#f2fce4',
  '#feefea',
  '#fffceb',
  '#feefea',
  '#ecffec'
])

  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-0 hd">BEST SELLERS</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={10}
          slidesPerGroup={3}  
          navigation={false}
          modules={[Navigation]}
          className="mySwiper"
        >
            {
                itemBg?.map((bg, index) => (
                  <SwiperSlide key={index}>
                    <div className="item  text-center cursor" style={{ backgroundColor: bg }}>
                      <img src="https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-3d-red-apple-png-with-green-leaf-png-image_10201408.png" className="w-100"/>
                      <p className="text-center mt-2">Fruits</p>
                    </div>
                  </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
