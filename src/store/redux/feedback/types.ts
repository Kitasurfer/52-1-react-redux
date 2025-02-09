export type FeedbackState = {
  likes: number;
  dislikes: number;
};

export const feedbackInitialState: FeedbackState = {
  likes: 0,
  dislikes: 0
};

export type FeedbackStateSlice = {
	likes: number;
	dislikes: number;
};