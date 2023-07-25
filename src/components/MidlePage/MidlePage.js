import React, { useEffect, useState } from "react";
import "./MidlePage.css";
import axios from "axios";
import Category from "../Category/Category";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { appAction } from "../../store/app-slice";

const MiddlePage = () => {
  const dispatch = useDispatch();
  const apiUrl = useSelector((state) => state.app.apiUrl);
  const [productData, setProductData] = useState([]);
  const [category, setCategory] = useState([]);
  const [chooseProduct, setChooseProduct] = useState(null);
  const [onSwitch, setOnSwitch] = useState(false);

  const onGetApiProduct = async () => {
    const { data } = await axios.get(`${apiUrl}/product/getProductFormAll`);
    console.log(data.res[0]);
    setProductData(data.res);
    setChooseProduct(data.res[0])
  };

  const onGetApiCategory = async () => {
    const { data } = await axios.get(`${apiUrl}/category/getCategoryAll`);
    setCategory(data.res);
  };

  useEffect(() => {
    onGetApiProduct();
    onGetApiCategory();
  }, []);

  return (
    <div className="middlePage">
      {chooseProduct != null ? (
        <>
          <div
            className={` ${
              onSwitch ? "slide-in-blurred-top1" : "slide-in-blurred-top2"
            } product-cover `}
          >
            <img src={chooseProduct.image || "icon-coffee.png"} alt="cover" />
            <div className="product-detail">
              <div className="product-name">{chooseProduct.productBase.prodTitle}</div>
              <div className="description">
              {chooseProduct.prodForm}
              </div>
              <div className="description">{chooseProduct.price}</div>
              {/* <div className="col-center mt-4">
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
              </div> */}
              <button
                className="btn-add-cart mt-3"
                onClick={() =>
                  dispatch(
                    appAction.productList({ productList: chooseProduct })
                  )
                }
              >
                เพิ่มในตะกร้า
              </button>
            </div>
          </div>
        </>
      ) : (
        <div style={{ height: "0px" }}></div>
      )}
      <div className="group-category">
        <Category data={category} />
      </div>
      <div className="group-product">
        {productData.length > 0 && (
          <Card
            data={productData}
            setChooseProduct={setChooseProduct}
            setOnSwitch={setOnSwitch}
          />
        )}
      </div>
    </div>
  );
};
export default MiddlePage;
