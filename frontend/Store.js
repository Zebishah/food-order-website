// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../frontend/src/redux/RootReducer.jsx";

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
