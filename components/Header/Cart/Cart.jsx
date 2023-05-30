import React, { useState } from "react";
import style from "./Cart.module.css";
import { AiOutlineClose } from "react-icons/ai";

function Cart( {handleCartClose} ) {
  return (
    <div>
      <div className={style.cartHeading}>
        <h4 className={style.cartTitle}>Giỏ hàng</h4>
        <div
          className={style.cartBtnClose}
            onClick={handleCartClose}
        >
          <AiOutlineClose />
        </div>
      </div>
      <div className={style.drawerInner}>
        <div className={style.cartSideContainer}>
          <form action="">
            <div className={style.cartBody}>
              <div className={style.cartRow}>
                <a href="#" title="Bé cún Tabu Lông Mềm Mịn">
                  <img src="assets/images2/product-img2jpg1@2x.png" alt="" />
                </a>
                <div className={style.cartInfo}>
                  <div className={style.cartName}>
                    <a href="#" className={style.cartProductName}>
                      Chó bông siêu cute hột me
                    </a>
                    <span className={style.varientTitle}>Nâu</span>
                  </div>
                  <div className={style.flex}>
                    <div className="col col-6">
                      <label class={style.cartQuantity}>Số lượng</label>
                      <div class={style.inputGroupBtn}>
                        <button type="button" className={style.btnMinus}>
                          {" "}
                          -{" "}
                        </button>
                        <input
                          type="text"
                          className={style.productQuantity}
                          value={1}
                        />
                        <button type="button" className={style.btnPlus}>
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    <div className={`${style.flexRight} col col-6`}>
                      <span className={style.productPrice}>520.000₫</span>
                      <a href="#" className={style.btnRemove}>
                        Xoá
                      </a>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className={style.cartRow}>
                <a href="#" title="Bé cún Tabu Lông Mềm Mịn">
                  <img src="assets/images2/product-img10jpg@2x.png" alt="" />
                </a>
                <div className={style.cartInfo}>
                  <div className={style.cartName}>
                    <a href="#" className={style.cartProductName}>
                      Khủng long xanh lè, thấy ghéc
                    </a>
                    <span className={style.varientTitle}>Xanh lá</span>
                  </div>
                  <div className={style.flex}>
                    <div className="col col-6">
                      <label class={style.cartQuantity}>Số lượng</label>
                      <div class={style.inputGroupBtn}>
                        <button type="button" className={style.btnMinus}>
                          {" "}
                          -{" "}
                        </button>
                        <input
                          type="text"
                          className={style.productQuantity}
                          value={1}
                        />
                        <button type="button" className={style.btnPlus}>
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    <div className={`${style.flexRight} col col-6`}>
                      <span className={style.productPrice}>320.000₫</span>
                      <a href="#" className={style.btnRemove}>
                        Xoá
                      </a>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className={style.cartFooter}>
              {/* tinh tien */}
              <div className={style.subTotal}>
                <div>Tổng tiền: </div>
                {/* tong tien lay ra tu san pham ( mot thay doi cai nay) */}
                <div>
                  <span className={style.totalPrice}>840.000₫</span>
                </div>
              </div>
              {/* nut thanh toan */}
              <div className={style.checkoutBtn}>
                <button href="/" > <a href="/">Thanh Toán</a></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cart;
