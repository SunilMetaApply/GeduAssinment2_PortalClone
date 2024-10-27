import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  countries: string[];
  studentType: string;
  discipline: string;
}

const initialState: SearchState = {
  countries: [],
  studentType: '',
  discipline: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchParams(state, action: PayloadAction<SearchState>) {
      return { ...state, ...action.payload };
    },
    clearSearchParams(state) {
      return initialState;
    },
  },
});

export const { setSearchParams, clearSearchParams } = searchSlice.actions;
export default searchSlice.reducer;
