import React, { FC } from "react";
import { useState } from "react";
import style from "./Header.module.css";
import Link from "next/link";
import Cart from "./Cart/Cart";
import Search from "./SeachingGroup/Search";

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartOpen = (e) => {
    e.preventDefault();
    setCartOpen(true);
  };

  const handleCartClose = (e) => {
    e.preventDefault();
    setCartOpen(false);
  };

  return (
    <header
      className="header_wrap   header_with_topbar"
      // style={{ marginTop: "50px" }}
    >
      <div className="top-header p-0 pt-2">
        <div className="container mb-1">
          <div className="row align-items-center">

            {/* Logo */}
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-md-start">
                <Link className={style.logo} href="/">
                  <img src="assets/images/image-141@2x.png" alt="logo" />
                  <p className={style.logoTitle}>Tiệm Homie</p>
                </Link>
              </div>
            </div>

            {/*  */}
            <div className="col-md-8 d-flex align-items-center justify-content-center justify-content-md-end">
              <ul className="navbar-nav attr-nav align-items-center">
                <Search className= "me-16" />
               
                <li className={style.loginBtn}>
                  <a href="/">
                    <i className="ti-user"></i>
                  </a>
                </li>

                <li className="">
                  <a
                    className="nav-link cart_trigger"
                    href="#"
                    data-bs-toggle=""
                    onClick={handleCartOpen}
                  >
                    <i className="linearicons-cart"></i>
                    <span className="cart_count">2</span>
                  </a>

                  {isCartOpen && (
                    <div className={style.cartSidebarClose}>
                      <div className={style.open}>
                        <Cart handleCartClose={handleCartClose} />
                      </div>
                    </div>
                  )}
                </li>
                <button
                  className="navbar-toggler mt-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-expanded="false"
                >
                  <span className="ion-android-menu fs-3"></span>
                </button>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`${style.bgHeader} bottom_header dark_skin main_menu_uppercase `}
          // style={{ marginTop: "25px" }}
        >
          <div className="container">
            <nav className={`${style.content} navbar navbar-expand-lg`}>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarSupportedContent"

              >
                <ul className="navbar-nav">
                  <li className="dropdown">
                    <Link
                      data-bs-toggle=""
                      className="nav-link active"
                      href="/"
                    >
                      Trang Chủ
                    </Link>
                  </li>
                  <li className="dropdown dropdown-mega-menu">
                    <a
                      className="dropdown-toggle nav-link"
                      href="shop_left"
                      data-bs-toggle="dropdown"
                    >
                      Sản Phẩm
                    </a>
                    <div className="dropdown-menu">
                      <ul className="mega-menu d-lg-flex">
                        <li className="mega-menu-col col-lg-2">
                          <ul>
                            <li className="dropdown-header">Quà Tặng</li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Thú Bông
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Chén Đĩa Ly Sứ
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mèo Gốm
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mền
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Túi Xách
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-3">
                          <ul>
                            <li className="dropdown-header">
                              Trang Trí Nhà Cửa
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Thú Bông
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Gối Bông
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Chén Đĩa Ly Sứ
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mèo Gốm
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mền
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-2">
                          <ul>
                            <li className="dropdown-header">Thư Giãn</li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Thú Bông
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Gối Bông
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mền
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Quạt
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-2">
                          <ul>
                            <li className="dropdown-header">Tiện Ích</li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Chén Đĩa Ly Sứ
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mền
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Quạt
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Gối Tựa Lưng
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Gối Cổ
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Ly Giữ Nhiệt
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-3">
                          <ul>
                            <li className="dropdown-header">Phụ Kiện</li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Móc Khoá
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Túi Xách
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Túi Mỹ Phẩm
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="d-lg-flex menu_banners row g-3 px-3">
                        <div className="col-sm-4">
                          <div className="header-banner">
                            <img
                              src="assets/images/shop-banner-img1jpg@2x.png"
                              alt="menu_banner1"
                            />
                            {/* <div className="banne_info">
                              <h6>10% Off</h6>
                              <h4>New Arrival</h4>
                              <a href="#">Shop now</a>
                            </div> */}
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="header-banner">
                            <img
                              src="assets/images/shop-banner-img2jpg@2x.png"
                              alt="menu_banner2"
                            />
                            {/* <div className="banne_info">
                              <h6>15% Off</h6>
                              <h4>Men's Fashion</h4>
                              <a href="#">Shop now</a>
                            </div> */}
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="header-banner">
                            <img
                              src="assets/images/shop-banner-img1jpg@2x.png"
                              alt="menu_banner3"
                            />
                            {/* <div className="banne_info">
                              <h6>23% Off</h6>
                              <h4>Kids Fashion</h4>
                              <a href="#">Shop now</a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link className="nav-link nav_item" href="shop_left">
                      Set Quà Tặng
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link nav_item" href="contact">
                      Câu Chuyện Thương Hiệu
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;