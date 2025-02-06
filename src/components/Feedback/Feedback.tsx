/** @jsxImportSource @emotion/react */
import React, { useState, useCallback, memo, useEffect } from 'react';
import {
  ContainerStyle,
  TitleStyle,
  StatItemStyle,
  StatCountStyle,
  StatLabelStyle,
  ActionsStyle,
  ResetSectionStyle,
  LikeButtonStyle,
  DislikeButtonStyle,
  ResetButtonStyle,
  FeedbackWrapper,
  StatsStyle,
} from './styles';
import { LikeIcon, DislikeIcon, ResetIcon } from './IconsFeedback';
import type { FeedbackProps } from './types';

const Feedback: React.FC<FeedbackProps> = ({
  title = 'Feedback',
  initialLikes = 0,
  initialDislikes = 0,
  theme = 'light',
  onReaction,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleReaction = useCallback(
    (type: 'like' | 'dislike' | 'reset') => {
      if (isAnimating) return;
      setIsAnimating(true);

      if (type === 'like') {
        setLikes((prev) => prev + 1);
      } else if (type === 'dislike') {
        setDislikes((prev) => prev + 1);
      } else {
        setLikes(initialLikes);
        setDislikes(initialDislikes);
      }

      onReaction?.(type);

      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    },
    [initialLikes, initialDislikes, isAnimating, onReaction]
  );

  useEffect(() => {
    setLikes(initialLikes);
    setDislikes(initialDislikes);
  }, [initialLikes, initialDislikes]);

  return (
    <FeedbackWrapper>
      <ContainerStyle theme={theme}>
        <TitleStyle>{title}</TitleStyle>
        <StatsStyle>
          <StatItemStyle>
            <StatCountStyle>{likes}</StatCountStyle>
            <StatLabelStyle>Likes</StatLabelStyle>
          </StatItemStyle>
          <StatItemStyle>
            <StatCountStyle>{dislikes}</StatCountStyle>
            <StatLabelStyle>Dislikes</StatLabelStyle>
          </StatItemStyle>
        </StatsStyle>
        <ActionsStyle>
          <LikeButtonStyle
            onClick={() => handleReaction('like')}
            disabled={isAnimating}
          >
            <LikeIcon />
            <StatLabelStyle>Like</StatLabelStyle>
          </LikeButtonStyle>
          <DislikeButtonStyle
            onClick={() => handleReaction('dislike')}
            disabled={isAnimating}
          >
            <DislikeIcon />
            <StatLabelStyle>Dislike</StatLabelStyle>
          </DislikeButtonStyle>
        </ActionsStyle>
        <ResetSectionStyle>
          <ResetButtonStyle
            onClick={() => handleReaction('reset')}
            disabled={isAnimating}
          >
            <ResetIcon />
            <StatLabelStyle>Reset</StatLabelStyle>
          </ResetButtonStyle>
        </ResetSectionStyle>
      </ContainerStyle>
    </FeedbackWrapper>
  );
};

export default memo(Feedback);