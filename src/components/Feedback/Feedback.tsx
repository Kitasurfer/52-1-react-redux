import { useSelector, useDispatch } from "react-redux";
import { feedbackSelectors, feedbackActions } from "store/redux/feedback/feedbackSlice";

import Button from "components/Button/Button";
import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result
} from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";

function Feedback() {
  const likeCount = useAppSelector(state => feedbackSelectors.likeCount(state));
  const dislikeCount = useAppSelector(state => feedbackSelectors.dislikeCount(state));
	const dispatch = useAppDispatch();

	const addLike = () => {
		dispatch(feedbackActions.addLike());
	};
	const addDislike = () => dispatch(feedbackActions.addDislike());
	const resetResults = () => dispatch(feedbackActions.resetResults());


  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>Понравилось: {likeCount}</Result>
          <Button name="LIKE" type="button" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>Непонравилось: {dislikeCount}</Result>
          <Button name="DISLIKE" type="button" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" type="submit" onClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;
