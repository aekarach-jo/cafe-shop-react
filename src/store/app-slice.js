import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  productList: [],
};

const appslice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers:
   {
    productList: (state, action) => {
        state.productList.push(action.payload.productList);
    },
    onDeleteProduct: (state, action) => { // ทำการลบที่ฟังก์ชันก่อนส่งค่า Array ก้อนใหม่มา
        // let newArr = state.productList.filter((item, index) => index !== action.payload.indexForDelete);
        state.productList = action.payload.productList
    }
  },
});

export const appAction = appslice.actions;
export default appslice;
