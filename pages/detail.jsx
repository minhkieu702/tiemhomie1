import React, { useState } from "react";
import FeaturedProductHeader from "../components/section/featuredProduct/FeaturedProductHeader";
import ProductList from "../components/section/productCard/ProductList";
import Tabs from "../components/tabs/Tabs";
import Image from "next/image";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import Link from "next/link";
import ProductGallery from "../components/productDetail/ProductGallery";
import ProductDetail from "../components/productDetail/ProductDetail";

const detail = () => {
  const [showTabs, setShowTabs] = useState(true);
  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [showSaleOfprice, setShowSaleOfPrice] = useState(true);
  return (
    <>
      <BreadCrumb descriptionTitle="Chi Tiết Sản Phẩm" title="Chi Tiết Sản Phẩm"></BreadCrumb>

      {/* START MAIN CONTENT */}
      <div className="main_content">
        {/* START SECTION SHOP */}
        <div className="section">
          <div className="container">

            {/* Main Details of the pages NEED TO WRITE THE LOGIC */}
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                <div className="product-image">
                  <div className="product_img_box">
                    <Image
                      src="/assets/images2/product-img1jpg@2x.png"
                      width={600}
                      height={600}
                      alt="img"
                      id="product_img"
                    />
                    <Link href="#" className="product_img_zoom" title="Zoom">
                      <span className="linearicons-zoom-in" />
                    </Link>
                  </div>
                  <ProductGallery />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <ProductDetail />
              </div>
            </div>

            {/* The Tabs NEED TO WRITE THE LOGIC  */}
            <Tabs />

            {/* Section Product DONE */}
            <div className="section small_pt small_pb">
              <div className="container">
                <div className="">
                  <FeaturedProductHeader
                    className="d-flex justify-content-center"
                    title="Có Thể Bạn Cũng Quan Tâm"
                  />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                      data-loop="true"
                      data-dots="false"
                      data-nav="true"
                      data-margin={20}
                      data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                    >
                      <ProductList
                        showProductActionBox={showProductActionBox}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Section Product DONE */}
          </div>


        </div>
        {/* END SECTION SHOP */}
        {/* START SECTION SUBSCRIBE NEWSLETTER */}
      </div>
    </>
  );
};

export default detail;
