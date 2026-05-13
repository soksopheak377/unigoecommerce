import React, { useState } from "react";
import ProductZoom from "../../Components/ProductZoom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
import { Button } from "@mui/material";
import { CiHeart } from "react-icons/ci";
import { BsCartFill } from "react-icons/bs";
import Tooltip from '@mui/material/Tooltip';
import { LuGitCompare } from "react-icons/lu";
import RelateProducts from "./RelateProducts";

const ProductDetail = () => {
    const [activeSize, setActiveSize] = useState(null);


    return (
        <>
            <section className="productDetail section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 pl-5">
                            <ProductZoom />
                        </div>
                        <div className="col-md-7 pl-5">

                            <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs</h2>
                            <ul className="list list-inline   align-items-center">
                                <li className=" list-inline-item">
                                    <span className="text-muted">Brands :</span> <span className="text-black">Watch's</span>
                                </li>
                                <li className=" list-inline-item ml-2">
                                    <Rating name="read-only" size="small" value={4.5} precision={0.5} readOnly />
                                    <span className="text-muted">1 Review</span>
                                </li>
                                <li className=" list-inline-item">
                                    <span className="text-muted">Price</span> <span className="text-black">$12.99</span>
                                </li>
                            </ul>


                            <div class="d-flex info mb-4">
                                <span class="oldPrice">$20.00</span>
                                <span class="netPrice text-danger ml-2">$14.00</span>
                            </div>

                            <span className="badge badge-success mb-3">In Stock</span>

                            <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                            <div className='productSize d-flex align-items-center'>
                                <span>Size / Weight:</span>
                                <ul className='list list-inline mb-0 pl-4'>
                                    <li className='list-inline-item'><a
                                        className={`tag ${activeSize === 0 ?
                                            'active' : ''}`}
                                        onClick={() => setActiveSize(0)}>50g</a></li>
                                    <li className='list-inline-item'><a
                                        className={`tag ${activeSize === 1 ?
                                            'active' : ''}`}
                                        onClick={() => setActiveSize(1)}>100g</a></li>
                                    <li className='list-inline-item'><a
                                        className={`tag ${activeSize === 2 ?
                                            'active' : ''}`}
                                        onClick={() => setActiveSize(2)}>200g</a></li>
                                    <li className='list-inline-item'><a
                                        className={`tag ${activeSize === 3 ?
                                            'active' : ''}`}
                                        onClick={() => setActiveSize(3)}>300g</a></li>
                                    <li className='list-inline-item'><a
                                        className={`tag ${activeSize === 4 ?
                                            'active' : ''}`}
                                        onClick={() => setActiveSize(4)}>400g</a></li>
                                    <li className='list-inline-item'><a
                                        className={`tag ${activeSize === 5 ?
                                            'active' : ''}`}
                                        onClick={() => setActiveSize(5)}>500g</a></li>
                                </ul>
                            </div>

                            <div className="d-flex align-items-center">
                                <QuantityBox />
                                <Button className="btn-addcart btn-blue btn-lg btn-round ml-3">
                                    <BsCartFill /> &nbsp;
                                    Add to Cart
                                </Button>

                                <div className="ml-3 btn-list">
                                    <Tooltip describeChild title="Add to Wishlist" placement="top">
                                        <Button className="btn-addcart btn-blue btn-lg btn-cicle">
                                            <CiHeart />
                                        </Button>
                                    </Tooltip>
                                </div>
                                <div className="ml-2 btn-list">
                                    <Tooltip describeChild title="Add to Compare" placement="top">
                                        <Button className="btn-addcart btn-blue btn-lg btn-cicle">
                                            <LuGitCompare />
                                        </Button>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card m-3 mt-5 p-3 detailsPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                <li className="list-inline-item"><button className="active">Description</button></li>
                                <li className="list-inline-item"><button>Additional Information</button></li>
                                <li className="list-inline-item"><button>Reviews (1)</button></li>
                            </ul>
                        </div>

                        <div className="tabContent">
                            <p >
                                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                            </p>
                            <p>fkjsfsflsd</p>
                            <p>
                                990800
                            </p>
                        </div>
                    </div>

                    <br/>
                    <RelateProducts title="RELATE PRODUCTS" />
                    <br/>   
                    <RelateProducts  title="RECENTLY VIEWED PRODUCTS"/>
                </div>
            </section>
        </>
    );
}

export default ProductDetail;