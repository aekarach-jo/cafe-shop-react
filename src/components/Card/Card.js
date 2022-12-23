import React, { useState } from "react";
import "./Card.css";

const Card = ({ data, setChooseProduct, setOnSwitch }) => {
  const [selected, setSelected] = useState();

  return (
    <>
      <div className="card-product">
        {data?.map((item, index) => (
          <div
            className={`${selected === index ? "active" : ""} card-body`}
            key={index}
            onClick={() => (setChooseProduct(item),setSelected(index),setOnSwitch(prev => !prev))}
          >
            <div className="card-img">
              <img src={item.image} alt="card-img" />
            </div>
            <div className="card-detail">
              <div className="col-left">
                <div className="card-name">{item.name}</div>
              </div>

              <div className="col-right">
                <div className="card-price">{item.price}</div>
                {/* <button className="btn-add">
                  <p>เลือก</p>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
