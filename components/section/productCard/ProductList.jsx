import Link from "next/link";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import productData from "../../../data/product.json"

// dont need to use 

const ProductList = ({showProductActionBox,showSaleOfprice}) => {

  return (
    <>
      {productData.map((product, index) => (
        <div key={index} >
          <Link href="/detail" >
            <ProductCard
              productData = {product}
              showProductActionBox={showProductActionBox}
              showSaleOfprice = {showSaleOfprice}
            />
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductList;
