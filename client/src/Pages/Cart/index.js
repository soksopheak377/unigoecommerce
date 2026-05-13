import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { IoMdClose } from "react-icons/io";

import { IoCartSharp } from "react-icons/io5";
import QuantityBox from "../../Components/QuantityBox";

const Carts = () => {
    return (
        <>
            <section className="section mt-3 CartPage">
                <div className="container">
                    <h2 className="hd mb-0">Your Cart</h2>
                    <p>There are <b>3</b> products in your cart</p>
                    <div className="row">
                        <div className="col-md-9 pr-5">

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="40%">Product</th>
                                            <th width="15%" >Unit Price</th>
                                            <th width="20%">Quantity</th>
                                            <th width="15%">Subtotal</th>
                                            <th width="5%">Remove</th>
                                        </tr>
                                    </thead>
                                </table>
                                <tbody>
                                    <tr className="tr-hover">
                                        <td width="40%" >
                                            <div className="d-flex align-items-center cartItemimgWrapper">
                                                <Link to="/product/1" className="d-flex align-items-center gap-3">
                                                    <div className="imgWrapper">
                                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                                            className="w-100" />
                                                    </div>

                                                    <div className="info px-3">
                                                        <h6 className="mb-0">Field Roast Chao Cheese Cremy Original</h6>
                                                        <p className="mb-0">
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly /></p>

                                                    </div>
                                                </Link>
                                            </div>
                                        </td>
                                        <td width="15%" >$7.50</td>
                                        <td width="20%"><QuantityBox /></td>
                                        <td width="15%">$7.50</td>
                                        <td width="5%"><span className="remove"><IoMdClose /></span></td>
                                    </tr>
                                    <tr className="tr-hover">
                                        <td width="40%" >
                                            <div className="d-flex align-items-center cartItemimgWrapper">
                                                <Link to="/product/1" className="d-flex align-items-center gap-3">
                                                    <div className="imgWrapper">
                                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                                            className="w-100" />
                                                    </div>

                                                    <div className="info px-3">
                                                        <h6 className="mb-0">Field Roast Chao Cheese Cremy Original</h6>
                                                        <p className="mb-0">
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly /></p>

                                                    </div>
                                                </Link>
                                            </div>
                                        </td>
                                        <td width="15%" >$7.50</td>
                                        <td width="20%"><QuantityBox /></td>
                                        <td width="15%">$7.50</td>
                                        <td width="5%"><span className="remove"><IoMdClose /></span></td>
                                    </tr>
                                    <tr className="tr-hover">
                                        <td width="40%" >
                                            <div className="d-flex align-items-center cartItemimgWrapper">
                                                <Link to="/product/1" className="d-flex align-items-center gap-3">
                                                    <div className="imgWrapper">
                                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                                            className="w-100" />
                                                    </div>

                                                    <div className="info px-3">
                                                        <h6 className="mb-0">Field Roast Chao Cheese Cremy Original</h6>
                                                        <p className="mb-0">
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly /></p>

                                                    </div>
                                                </Link>
                                            </div>
                                        </td>
                                        <td width="15%" >$7.50</td>
                                        <td width="20%"><QuantityBox /></td>
                                        <td width="15%">$7.50</td>
                                        <td width="5%"><span className="remove"><IoMdClose /></span></td>
                                    </tr>
                                    <tr className="tr-hover">
                                        <td width="40%" >
                                            <div className="d-flex align-items-center cartItemimgWrapper">
                                                <Link to="/product/1" className="d-flex align-items-center gap-3">
                                                    <div className="imgWrapper">
                                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                                            className="w-100" />
                                                    </div>

                                                    <div className="info px-3">
                                                        <h6 className="mb-0">Field Roast Chao Cheese Cremy Original</h6>
                                                        <p className="mb-0">
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly /></p>

                                                    </div>
                                                </Link>
                                            </div>
                                        </td>
                                        <td width="15%" >$7.50</td>
                                        <td width="20%"><QuantityBox /></td>
                                        <td width="15%">$7.50</td>
                                        <td width="5%"><span className="remove"><IoMdClose /></span></td>
                                    </tr>
                                    <tr className="tr-hover">
                                        <td width="40%" >
                                            <div className="d-flex align-items-center cartItemimgWrapper">
                                                <Link to="/product/1" className="d-flex align-items-center gap-3">
                                                    <div className="imgWrapper">
                                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                                            className="w-100" />
                                                    </div>

                                                    <div className="info px-3">
                                                        <h6 className="mb-0">Field Roast Chao Cheese Cremy Original</h6>
                                                        <p className="mb-0">
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly /></p>

                                                    </div>
                                                </Link>
                                            </div>
                                        </td>
                                        <td width="15%" >$7.50</td>
                                        <td width="20%"><QuantityBox /></td>
                                        <td width="15%">$7.50</td>
                                        <td width="5%"><span className="remove"><IoMdClose /></span></td>
                                    </tr>
                                    <tr className="tr-hover">
                                        <td width="40%" >
                                            <div className="d-flex align-items-center cartItemimgWrapper">
                                                <Link to="/product/1" className="d-flex align-items-center gap-3">
                                                    <div className="imgWrapper">
                                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                                            className="w-100" />
                                                    </div>

                                                    <div className="info px-3">
                                                        <h6 className="mb-0">Field Roast Chao Cheese Cremy Original</h6>
                                                        <p className="mb-0">
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly /></p>

                                                    </div>
                                                </Link>
                                            </div>
                                        </td>
                                        <td width="15%" >$7.50</td>
                                        <td width="20%"><QuantityBox /></td>
                                        <td width="15%">$7.50</td>
                                        <td width="5%"><span className="remove"><IoMdClose /></span></td>
                                    </tr>
                                </tbody>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card shadow p-3 cartDetails">
                                <h4> CART TOTALS</h4>
                                <div className="d-flex justify-content-between">
                                    <p>Subtotal</p>
                                    <p className="text-2bbef9 font-bold">$15.00</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Shipping</p>
                                    <p className="font-bold">Free</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Estimated For</p>
                                    <p className="font-bold">Cambodia</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Total</p>
                                    <p className="text-2bbef9 font-bold">$15.00</p>
                                </div>
                                <button className="btn bg-blue text-white w-100 mt-3"><IoCartSharp size="20" /> Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Carts;