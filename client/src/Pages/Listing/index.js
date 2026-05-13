import React, { useState } from "react";
import Sidebars from "../../Components/Sidebar";
import Button from '@mui/material/Button';
import { RiMenuLine } from "react-icons/ri";
import { HiOutlineViewGrid } from "react-icons/hi";
import { TbGridDots } from "react-icons/tb";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// pagination
import Pagination from '@mui/material/Pagination';

import bannercontent from "../../Assets/banners/bacola-banner-18.webp";
import ProductItem from "../../Components/ProductItem";

const Listing = () => {
   const [anchorEl, setAnchorEl] = useState(null);
   const [productView, setProductView] = useState('four');
   const openDropdown = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <>
         <section className="product_Listing_Page d-flex">
            <div className="container">
               <div className="row productListing">
                  <div className="col-md-3">
                     <Sidebars />
                  </div>
                  <div className="col-md-9 content_right">
                     <img src={bannercontent} className="w-100 mb-4" style={{ borderRadius: '8px' }} />

                     <div className=" showBy mt-3 mb-3 align-items-center">
                        <div className="d-flex btnWrapper">
                           <Button className={productView==='one' && 'act'} onClick={() => setProductView('one')}><RiMenuLine /></Button>
                           <Button className={productView==='two' && 'act'} onClick={() => setProductView('two')}><HiOutlineViewGrid /></Button>
                           <Button className={productView==='three' && 'act'} onClick={() => setProductView('three')}><TbGridDots /></Button>
                           <Button className={productView==='four' && 'act'} onClick={() => setProductView('four')}><TfiLayoutGrid4Alt /></Button>
                        </div>
                        <div className="ml-auto showByFilter">
                           <Button
                              className="btn btn-light"
                              id="basic-button"
                              aria-controls={openDropdown ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={openDropdown ? 'true' : undefined}
                              onClick={handleClick}
                           >
                              Show 9 <FaAngleDown />
                           </Button>
                           <Menu
                              className="w-100 showPerPageDropdown"
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={openDropdown}
                              onClose={handleClose}
                              slotProps={{
                                 list: {
                                    'aria-labelledby': 'basic-button',
                                 },
                              }}
                           >
                              <MenuItem onClick={handleClose}>10</MenuItem>
                              <MenuItem onClick={handleClose}>20</MenuItem>
                              <MenuItem onClick={handleClose}>30</MenuItem>
                              <MenuItem onClick={handleClose}>40</MenuItem>
                              <MenuItem onClick={handleClose}>50</MenuItem>
                              <MenuItem onClick={handleClose}>60</MenuItem>

                           </Menu>
                        </div>
                     </div>

                     {/* product listing */}
                     <div className="productListingRow d-flex flex-wrap">
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                        <ProductItem itemView={productView} />
                     </div>
                     <div className="paginationWrapper mt-4 mb-4 d-flex justify-content-center">
                        <Pagination count={10} variant="outlined" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Listing;