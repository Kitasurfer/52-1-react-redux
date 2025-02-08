
import { useState } from "react";

import Button from "components/Button/Button";
import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result
} from "./styles";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const addLike = (): void => {
    setLikes(likes + 1);
  };

  const addDislike = (): void => {
    setDislikes(dislikes + 1);
  };

  const resetResults = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>Понравилось: {likes}</Result>
          <Button  name="LIKE" type="button" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>Непонравилось: {dislikes}</Result>
          <Button name="DISLIKE" type="button" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" type="submit" onClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;