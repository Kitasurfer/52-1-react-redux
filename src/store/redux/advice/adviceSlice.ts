import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

interface AdviceState {
  data: string[];
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: AdviceState = {
  data: [],
  error: null,
  status: "idle",
};

const adviceSlice = createSlice({
  name: "advice",
  initialState,
  reducers: {
    getAdvice: (state) => {
      state.status = "loading";
      state.error = null;
    },
    getAdviceSuccess: (state, action: PayloadAction<string>) => {
      state.status = "succeeded";
      state.data.push(action.payload);
    },
    getAdviceFailure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
    deleteAllAdvices: (state) => {
      state.data = [];
    },
  },
});

export const adviceActions = adviceSlice.actions;
export const adviceSelectors = {
  adviceData: (state: RootState) => state.advice,
};

export { adviceSlice };

export default adviceSlice.reducer;
