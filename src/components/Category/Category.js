import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./category.css";

const Category = ({ data }) => {
  return (
    <div className="card-category">
      {data?.map((item, index) => (
        <div className="card-item" key={index}>
          <div className="item-name">{item?.cateName}</div>
        </div>
      ))}
    </div>
  );
};

export default Category;
