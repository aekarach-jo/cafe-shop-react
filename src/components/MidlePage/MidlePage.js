import React, { useEffect, useRef, useState } from "react";
import "./MidlePage.css";
import cover from "../../imgs/prod_img/cover.png";
import Card from "../Card/Card";
import { Product } from "../../Data/mockData";
import { useDispatch } from "react-redux";
import { appAction } from "../../store/app-slice";

const MiddlePage = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState(Product);
  const [chooseProduct, setChooseProduct] = useState(productData[0]);
  const [onSwitch, setOnSwitch] = useState(false)
  
  return (
    <div className="middlePage">
      <div className={` ${onSwitch ? 'slide-in-blurred-top1' : 'slide-in-blurred-top2'} product-cover `} >
        {chooseProduct != null && (
          <>
            <img src={chooseProduct.image} alt="cover" />
            <div className="product-detail">
              <div className="product-name">{chooseProduct.name}</div>
              <div className="text-orange-200 description">{chooseProduct.description}</div>
              <div className="text-orange-200">{chooseProduct.ราคา}</div>
              <div className="col-center mt-4">
                {chooseProduct.additional.map((option, index) => {
                  return (
                    <React.Fragment key={index}>
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-100 bg-gray-200 checked:bg-[#6b390f] checked:border-[#6b390f] focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                        type="radio"
                        name="flexRadioDefault1"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label inline-block text-orange-200 text-xs"
                        htmlFor="flexRadioDefault1"
                      >
                        {option.option}
                      </label>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="col-center">
                {chooseProduct.sweetnessLevel.map((option, index) => {
                  return (
                    <React.Fragment key={index}>
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-100 bg-gray-200 checked:bg-[#6b390f] checked:border-[#6b390f] focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                        type="radio"
                        name="flexRadioDefault2"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label inline-block text-orange-200 text-xs"
                        htmlFor="flexRadioDefault2"
                      >
                        {option.level}
                      </label>
                    </React.Fragment>
                  );
                })}
              </div>
              <button
                className="btn-add-cart mt-3"
                onClick={() => dispatch(
                  appAction.productList({ productList: chooseProduct
                  })
                )}
              >
                เพิ่มในตะกร้า
              </button>
            </div>
          </>
        )}
      </div>
      <div className="group-product">
        <Card data={productData} setChooseProduct={setChooseProduct} setOnSwitch={setOnSwitch}/>
      </div>
    </div>
  );
};
export default MiddlePage;
