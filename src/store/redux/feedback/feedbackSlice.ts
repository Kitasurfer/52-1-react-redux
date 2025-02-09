import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeedbackState, FeedbackStateSlice } from './types';

const feedbackInitialState: FeedbackStateSlice = { likes: 0, dislikes: 0 }

const feedbackSlice = createSlice({
  name: 'FEEDBACK',
  initialState: feedbackInitialState,
  reducers: {
    incrementLikes: (state) => {
      state.likes += 1;
    },
    incrementDislikes: (state) => {
      state.dislikes += 1;
    },
    resetFeedback: (state) => {
      state.likes = 0;
      state.dislikes = 0;
    }
  }
});

export const { actions: feedbackActions } = feedbackSlice;
export const { reducer: feedbackReducer } = feedbackSlice;

export const feedbackSelectors = {
  likes: (state: { feedback: FeedbackState }) => state.feedback.likes,
  dislikes: (state: { feedback: FeedbackState }) => state.feedback.dislikes
};