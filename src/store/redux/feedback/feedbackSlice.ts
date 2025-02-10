import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { feedbackSliceState } from './types';

const feedbackInitialState: feedbackSliceState = { likeCount: 0, dislikeCount: 0 }


export const feedbackSlice = createSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: feedbackSliceState) => { state.likeCount += 1 }),
    addDislike: create.reducer((state: feedbackSliceState) => { state.dislikeCount += 1 }),
    resetResults: create.reducer(() => feedbackInitialState)
  }),
  selectors: {
    likeCount: (state: feedbackSliceState) => state.likeCount,
    dislikeCount: (state: feedbackSliceState) => state.dislikeCount,
    totalFeedback: (state: feedbackSliceState) => state.likeCount + state.dislikeCount
  }
})

export const feedbackData = (state: { feedback: feedbackSliceState }) => state.feedback;

export const feedbackSelectors = feedbackSlice.selectors;
export const feedbackActions = feedbackSlice.actions;
export const feedbackReducer = feedbackSlice.reducer;