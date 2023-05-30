"use client";
import Styles from "../productCard/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({
  productData,
  showProductActionBox,
  showSaleOfprice,
}) => {
  const {  attribute :  {imageUrl, title, price, salePercent, rating, del, description, rating_num} } = productData;
  return (
        <div className="product">
          <span className="pr_flash">New</span>
          <div className="product_img text-center">
            <div >
              <Link href="/shop_left">
                <div className={Styles.img}>
                  <img src={imageUrl} alt="product_img" />
                </div>
              </Link>
              {showProductActionBox && (
                <div className="product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <Link href="/shop_left">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop_left" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop_left" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop_left">
                        <i className="icon-heart" />
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="product_info ">
            <div className={Styles.downClass}>
              <div className={Styles.productTitle}>
                <h6
                  className="product_title"
                  style={{ color: "#292B2C", textDecoration: "none" }}
                >
                  <Link
                    href="/detail"
                    style={{ color: "#292B2C", textDecoration: "none" }}
                  >
                    {title}
                  </Link>
                </h6>
              </div>

              <div className={Styles.desSize}>
                <div className="pr_desc d-block">
                  <div className={Styles.overF}>
                    <p>{description}</p>
                  </div>
                </div>
              </div>

              <div className="product_price">
                <div className="">
                  <span className="price">{price} VND</span>
                  <br></br>
                  {showSaleOfprice && <del className="">{del} VND</del>}
                </div>
                <div className="on_sale">
                  {showSaleOfprice && <span>{salePercent} Off</span>}
                </div>
              </div>
              {/* <div className="rating_wrap">
                        <div className="rating">
                          <div
                            className="product_rate"
                            style={{ width: `${rating * 20}%` }}
                          />
                        </div>
                        <span className="rating_num">({rating_num})</span>
                      </div> */}
            </div>
          </div>
        </div>
      
  );
};

export default ProductCard;
