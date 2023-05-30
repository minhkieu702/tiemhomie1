import React, { useState, useEffect } from "react";
// import ProductCard from '../components/productCard/ProductCard'
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from "../components/section/productCard/ProductCard";
import productData from "../data/product.json";
import Link from "next/link";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
  const [value, setValue] = useState([100000, 700000]);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  const sliderStyle = {
    width: '100%',
    margin: '0 auto',
  };

  const valueContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  };


  const handleStyle = {
    borderColor: '#FFF',
    backgroundColor: '#FFF',
  };
  const trackStyle = {
    backgroundColor: "red",
  }
  return (
    <div>
      <h5>Giá</h5>
      <Slider
        range
        step={50000}
        min={0}
        max={1000000}
        value={value}
        onChange={handleSliderChange}
        style={sliderStyle}
        trackStyle={trackStyle}
        handleStyle={[handleStyle, handleStyle]} // Apply handle styles to both markers
      />
      <div style={valueContainerStyle}>
        <div>Giá: </div>
        <div className="fw-bold">
          {value[0].toLocaleString()}VND-{value[1].toLocaleString()}VND
        </div>
      </div>
    </div>
  );
};

const LimitDisplay = () => {
  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [currentProducts, setCurrentProducts] = useState([]);
  const totalProducts = productData.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const slicedProducts = productData.slice(startIndex, endIndex);
    setCurrentProducts(slicedProducts);
  }, [currentPage, productsPerPage]);
  return (
    <>
      <div className="row shop_container">
        {currentProducts.map((product, index) => (
          <div key={index} className="col-md-4">
            <ProductCard
              productData={product}
              showProductActionBox={showProductActionBox}
            />
          </div>
        ))}
      </div>
      {/* show more product */}
      <div className="row">
        <div className="col-12">
          <Pagination className="mt-3 justify-content-center pagination_style1">
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() =>
                currentPage > 1 && handlePageChange(currentPage - 1)
              }
            />
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() =>
                currentPage < totalPages && handlePageChange(currentPage + 1)
              }
            />
            <Pagination.Last onClick={() => handlePageChange(totalPages)} />
          </Pagination>
        </div>
      </div>


    </>
  )
}


const shopleft = () => {

  // Assume you have a totalProducts variable that represents the total number of products


  return (
    <div className="main_content">
      <BreadCrumb descriptionTitle="Tất Cả Sản Phẩm" title="Tất cả sản phẩm"></BreadCrumb>
      {/* START SECTION SHOP */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row align-items-center mb-4 pb-1">
                <div className="col-12">
                  <div className="d-flex justify-content-end product_header">
                    <div className="me-2 text-start">Sắp xếp theo</div>
                    <div className="custom_select text-end">
                      <select className="form-control form-control-sm">
                        <option value="order">Mặc định</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="date">Sort by newness</option>
                        <option value="price">Sort by price: low to high</option>
                        <option value="price-desc">Sort by price: high to low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* show more product */}
              <LimitDisplay></LimitDisplay>
            </div>
            <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="sidebar">
                <div className="widget">
                  <h5 className="widget_title">Danh Mục</h5>
                  <ul className="widget_categories">
                    <li>
                      <Link href="#">
                        <span className="categories_name">Quà tặng</span>
                        <span className="categories_num">(9)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="categories_name">Trang trí nhà cửa</span>
                        <span className="categories_num">(6)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="categories_name">Thư giãn</span>
                        <span className="categories_num">(4)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="categories_name">Tiện ích</span>
                        <span className="categories_num">(7)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="categories_name">Phụ kiện</span>
                        <span className="categories_num">(12)</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="widget">
                  <PriceFilter></PriceFilter>
                </div>
                <div className="widget">
                  <h5 className="widget_title">Đánh Giá</h5>
                  <ul className="list_brand">
                    <li>
                      <div className="custome-checkbox d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="5stars" value="" />
                        <label className="form-check-label d-flex" htmlFor="5stars">
                          <span>
                            <div className="text-end rating_wrap">
                              <div className="rating">
                                <div
                                  className="product_rate"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custome-checkbox d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="4stars" value="" />
                        <label className="form-check-label d-flex " htmlFor="4stars">
                          <span>
                            <div className="text-end rating_wrap">
                              <div className="rating">
                                <div
                                  className="product_rate"
                                  style={{ width: "80%" }}
                                />
                              </div>
                            </div>
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custome-checkbox d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="3stars" value="" />
                        <label className="form-check-label d-flex " htmlFor="3stars">
                          <span>
                            <div className="text-end rating_wrap">
                              <div className="rating">
                                <div
                                  className="product_rate"
                                  style={{ width: "60%" }}
                                />
                              </div>
                            </div>
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custome-checkbox d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="2stars" value="" />
                        <label className="form-check-label d-flex " htmlFor="2stars">
                          <span>
                            <div className="text-end rating_wrap">
                              <div className="rating">
                                <div
                                  className="product_rate"
                                  style={{ width: "40%" }}
                                />
                              </div>
                            </div>
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custome-checkbox d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="1stars" value="" />
                        <label className="form-check-label d-flex " htmlFor="1stars">
                          <span>
                            <div className="text-end rating_wrap">
                              <div className="rating">
                                <div
                                  className="product_rate"
                                  style={{ width: "20%" }}
                                />
                              </div>
                            </div>
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custome-checkbox d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="0stars" value="" />
                        <label className="form-check-label d-flex " htmlFor="0stars">
                          <span>
                            <div className="text-end rating_wrap">
                              <div className="rating">
                                <div
                                  className="product_rate"
                                  style={{ width: "0%" }}
                                />
                              </div>
                            </div>
                          </span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* END SECTION SHOP */}
    </div>
  );
};

export default shopleft;
