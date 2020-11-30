import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { CLEAR_TOKEN, SET_TOKEN } from "../toolkitTypes";

const token = createReducer(null, {
  [SET_TOKEN]: (state, { payload }) => payload,
  [CLEAR_TOKEN]: (state, { payload }) => null,
});

export default token;