// code related to redux store
// const configureStore = require("@reduxjs/toolkit").configureStore;
// const reduxLogger = require("redux-logger");
import { configureStore } from "@reduxjs/toolkit";
// const cakeReducer = require("../features/cake/cakeSlice");
// const iceCreamReducer = require("../features/iceCream/iceCreamSlice");
// const userReducer = require("../features/user/userSlice");
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/iceCream/iceCreamSlice";
import userReducer from "../features/user/userSlice";
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
