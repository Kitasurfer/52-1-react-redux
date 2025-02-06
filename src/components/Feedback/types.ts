export interface FeedbackProps {
  title?: string;
  initialLikes?: number;
  initialDislikes?: number;
  theme?: 'light' | 'dark';
  onReaction?: (type: 'like' | 'dislike' | 'reset') => void;
  className?: string;
}

export type ThemeType = 'light' | 'dark';

export interface StatItemProps {
  count: number;
  label: string;
  isActive: boolean;
  theme: ThemeType;
}

export interface ReactionButtonProps {
  type: 'like' | 'dislike' | 'reset';
  onClick: (type: 'like' | 'dislike' | 'reset') => void;
  theme: ThemeType;
  disabled?: boolean;
}

export interface EyesOverlayProps {
  activeEye: 'like' | 'dislike' | 'reset' | null;
  theme: ThemeType;
}