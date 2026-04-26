import React, { useState, useRef } from "react";
import {  Button } from "@mui/material";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
const QuantityBox = ()=>{
  const [quantity, setQuantity] = useState(1);
    return (
        <>
        <div className="quantityDrop d-flex align-items-center">
                  <Button className="btn-qty" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <FaMinus />
                  </Button>
                  <input type="text" value={quantity} readOnly />
                  <Button className="btn-qty" onClick={() => setQuantity(quantity + 1)}>
                    <FaPlus />
                  </Button>
              </div>
        </>
    );
}

export default QuantityBox;