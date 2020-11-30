import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./toolkitReducers/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

const middleWares=[thunk];

const rootMiddleWares=applyMiddleware(...middleWares);
const compose = composeWithDevTools(rootMiddleWares)

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, compose);
export const persistor = persistStore(store);

export default store;
