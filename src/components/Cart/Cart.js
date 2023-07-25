import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appAction } from "../../store/app-slice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.app.productList);
  const [onSlideCart, setOnSlideCart] = useState(false);
  const cardRef = useRef(0);

  useEffect(() => {
    if (cardRef) {
      cardRef.current.scrollTo({
        behavior: "smooth",
        top: cardRef.current.scrollHeight,
      });
    }
  }, [productList]);

  function onDeleteProduct(item, index) {
    let newArr = productList.filter((item, i) => i !== index);
    dispatch(appAction.onDeleteProduct({ productList: newArr }));
  }

  return (
    <>
      <div className="group-cart">
        <div className="cart-title">
          <p>รายการที่เลือก</p>
        </div>
        <div className="cart-body" ref={cardRef}>
          {productList.length > 0 && (
            <>
              {productList?.map((data, index) => (
                <div className="cart-list slide-in-blurred-right" key={index}>
                  <div className="image">
                    <img src={data.image || 'icon-coffee.png'} alt="pdList" />
                  </div>
                  <div className="unit">
                    <div className="prod-name">{data.productBase.prodTitle}({data.prodForm})</div>
                    <div className="product-unit">
                      <button className="btn">-</button>
                      <input className="btn" placeholder="1" />
                      <button className="btn">+</button>
                    </div>
                  </div>
                  <div className="btn-delete">
                    <img
                      src="https://img.icons8.com/color/200/delete-forever.png"
                      onClick={() => onDeleteProduct(data, index)}
                      alt="img_delete"
                      style={{ opacity: '0.8'}}
                    />
                    <div className="price">{data.price}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="cart-footer">
          <div className="price-group">
            <div className="col-left">1</div>
            <div className="col-right">2</div>
          </div>
          <button className="success-btn">สร้างบิล</button>
        </div>
      </div>
      <div className="navi-bar" onClick={() => setOnSlideCart((prev) => !prev)}>
        <div className="bar">
          <div className={`${
                !onSlideCart ? "slide-in-blurred-bottom group-cart" : "hidden"
              } `}>
            <div className="cart-title">
              <p>รายการที่เลือก</p>
            </div>
            <div className="cart-body" ref={cardRef}>
              {productList.length > 0 && (
                <>
                  {productList?.map((data, index) => (
                    <div
                      className="cart-list slide-in-blurred-right"
                      key={index}
                    >
                      <div className="image">
                        <img src={data.image} alt="productList" />
                      </div>
                      <div className="unit">
                        <div className="prod-name">{data.name}</div>
                        <div className="product-unit">
                          <button className="btn">-</button>
                          <input className="" placeholder="1" />
                          <button className="btn">+</button>
                        </div>
                      </div>
                      <div className="btn-delete">
                        <img
                          src="https://img.icons8.com/color/200/delete-forever.png"
                          onClick={() => onDeleteProduct(data, index)}
                          alt="img_delete"
                        />
                        <div className="price">{data.price}</div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="cart-footer">
              {/* <div className="price-group">
                <div className="col-left">1</div>
                <div className="col-right">2</div>
              </div> */}
              <button className="success-btn">สร้างบิล</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
