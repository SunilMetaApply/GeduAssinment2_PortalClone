import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AcademicRequirements {
  country: string | null;
  educationLevel: string | null;
}

interface ProgramDetails {
  institution: string | null;
  programLevel: string | null;
  programCategory: string | null;
  programDuration: number[];
}

interface SearchState {
  countries: string[];
  studentType: string;
  discipline: string;
  academicRequirements: AcademicRequirements;
  programDetails: ProgramDetails;
}

const initialState: SearchState = {
  countries: [],
  studentType: '',
  discipline: '',
  academicRequirements: {
    country: null,
    educationLevel: null,
  },
  programDetails: {
    institution: null,
    programLevel: null,
    programCategory: null,
    programDuration: [0, 20],
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchParams(state, action: PayloadAction<Partial<SearchState>>) {
      return { ...state, ...action.payload };
    },
    clearSearchParams(state) {
      return initialState;
    },
  },
});

export const { setSearchParams, clearSearchParams } = searchSlice.actions;
export default searchSlice.reducer;
