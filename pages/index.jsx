import React, { useState } from "react";
import SectionBannerSlider from "../components/SectionBanner/SectionBannerSlider";
// import ProductList from "../components/section/productCard/ProductList";
import FeaturedProductHeader from "../components/section/featuredProduct/FeaturedProductHeader";
import SectionBanner from "../components/SectionBanner/SectionBanner";
import productData from "../data/product.json";
import ProductCard from "../components/section/productCard/ProductCard";
import Link from "next/link";
function Home() {
  const [showTabs, setShowTabs] = useState(true);
  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [showSaleOfprice, setShowSaleOfPrice] = useState(true);

  return (
    <div>
      <div>
        <>
          {/* START SECTION BANNER */}
          <SectionBannerSlider />
          {/* END SECTION BANNER */}
        </>
        {/* END SECTION BANNER */}
        {/* END MAIN CONTENT */}
        <div className="main_content">
          {/* START SECTION SHOP DONE */}
          <div className="section small_pb">
            <div className="container">
              <FeaturedProductHeader showTabs={showTabs} title="Top Sản Phẩm" />
              <div className="row">
                <div className="col-12">
                  <div className="tab_slider">
                    <div
                      className="tab-pane fade show active"
                      id="arrival"
                      role="tabpanel"
                      aria-labelledby="arrival-tab"
                    >
                      <div
                        className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                      >
                        {productData.map((product, index) => (
                          <div key={index} className="item">
                            <Link href="/detail">
                              <ProductCard
                                productData={product}
                                showProductActionBox={showProductActionBox}
                                showSaleOfprice={showSaleOfprice}
                              />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="sellers"
                      role="tabpanel"
                      aria-labelledby="sellers-tab"
                    >
                      <div
                        className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                      >
                        {productData.map((product, index) => (
                          <div key={index}>
                            <Link href="/detail" className="item">
                              <ProductCard
                                productData={product}
                                showProductActionBox={showProductActionBox}
                                showSaleOfprice={showSaleOfprice}
                              />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="featured"
                      role="tabpanel"
                      aria-labelledby="featured-tab"
                    >
                      <div
                        className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                      >
                        {productData.map((product, index) => (
                          <div key={index}>
                            <Link href="/detail" className="item">
                              <ProductCard
                                productData={product}
                                showProductActionBox={showProductActionBox}
                                showSaleOfprice={showSaleOfprice}
                              />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="special"
                      role="tabpanel"
                      aria-labelledby="special-tab"
                    >
                      <div
                        className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                      >
                        {productData.map((product, index) => (
                          <div key={index}>
                            <Link href="/detail" className="item">
                              <ProductCard
                                productData={product}
                                showProductActionBox={showProductActionBox}
                                showSaleOfprice={showSaleOfprice}
                              />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}
          {/* START SECTION BANNER */}
          <div className="section pb_20 small_pt">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <SectionBanner
                    image="assets/images/shop-banner-img1jpg@2x.png"
                    title1="Super Sale"
                    title2="Bộ sưu tập mới"
                    buttonLink="shop_left"
                    buttonText="Mua Ngay"
                  />
                </div>
                <div className="col-md-6">
                  <SectionBanner
                    image="assets/images/shop-banner-img2jpg@2x.png"
                    title1="Sale 40% Off"
                    title2="SUMMER COMING"
                    buttonLink="shop_left"
                    buttonText="Mua Ngay"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION BANNER */}

          {/* START SECTION SHOP Done */}
          <div className="section small_pt small_pb">
            <div className="container">
              <div className="d-flex justify-content-center">
                <FeaturedProductHeader
                  className="d-flex justify-content-center"
                  title="Sản Phẩm Mới"
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
                    {productData.map((product, index) => (
                      <div key={index} className="item">
                        <ProductCard
                          productData={product}
                          showProductActionBox={showProductActionBox}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}
          {/* START SECTION SHOP Done */}
          <div className="section small_pt small_pb">
            <div className="container">
              <div className="d-flex justify-content-center">
                <FeaturedProductHeader
                  className="d-flex justify-content-center"
                  title="Chỉ Có Tại Hommie"
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
                    {productData.map((product, index) => (
                      <div key={index} className="item"> 
                        <ProductCard
                          productData={product}
                          showProductActionBox={showProductActionBox}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}

          {/* START SECTION SHOP  */}
          <div className="section small_pt pb_20">
            <div className="container">
              <FeaturedProductHeader
                className="d-flex justify-content-center"
                title="Bán Chạy Tại Hommie"
              />

              <div className="row">
                <div className="col-md-12">
                  <div
                    className="product_slider product_list carousel_slider owl-carousel owl-theme nav_style3"
                    data-loop="true"
                    data-dots="false"
                    data-nav="true"
                    data-margin={20}
                    data-responsive='{"0":{"items": "1"}, "767":{"items": "2"}, "991":{"items": "3"}, "1199":{"items": "3"}}'
                  >
                    {productData.map((product, index) => (
                      <div key={index} className="item">
                        <ProductCard
                          productData={product}
                        />
                      </div>
                    ))}
                    {/* <ProductList showProductActionBox={!showProductActionBox} />
                    <ProductList showProductActionBox={!showProductActionBox} /> */}
                    {/* <ProductList showProductActionBox={!showProductActionBox} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}
        </div>
        {/* END MAIN CONTENT */}
      </div>
    </div>
  );
}

export default Home;
