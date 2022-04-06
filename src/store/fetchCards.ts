import { createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../App";
import { IProduct } from "../interfaces/Interfaces";

export type InitialState = {
  items: [] | IProduct[],
  loading: boolean,
  error: null | string
}

const initialState: InitialState = {
  items: [],
  loading: false,
  error: null,
};

// загрузка
export const fetchCards = () => async (dispatch: any, getState: any) => {
  try {
    const response = await fetch(baseURL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    const {products} = data.data;
    dispatch(put(products));
    dispatch(fetchSuccess(products));
  } catch (e) {
    dispatch(fetchError(e));
  }
};

const cards = createSlice({
  name: "cards",
  initialState,
  reducers: {
    // загрузка
    put(state, action) {
      state.items = action.payload;
    },
    fetchStart(state, action) {
      return { ...state, loading: true, error: null };
    },
    fetchError(state, action) {
      const { error } = action.payload;
      return { ...state, loading: false, error };
    },
    fetchSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: null,
      };
    },
  },
});

export const { put, fetchStart, fetchError, fetchSuccess } = cards.actions;
export default cards.reducer;
