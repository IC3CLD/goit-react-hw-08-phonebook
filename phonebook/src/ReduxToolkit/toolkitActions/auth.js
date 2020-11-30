import { createAction } from "@reduxjs/toolkit";

import {
  SET_TOKEN,
  CLEAR_TOKEN
} from "../toolkitTypes/index";

const setToken = createAction(SET_TOKEN);
const clearToken = createAction(CLEAR_TOKEN);


export default {
    setToken,
    clearToken,
};
