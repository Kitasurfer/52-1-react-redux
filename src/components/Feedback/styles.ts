import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Анимация появления элементов
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Анимация пульсации кнопок
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

// Главный контейнер
export const ContainerStyle = styled.div<{ theme: 'light' | 'dark' }>`
  padding: 2rem;
  border-radius: 20px;
  background: ${(props) =>
    props.theme === 'light'
      ? 'rgba(255, 255, 255, 0.8)'
      : 'rgba(30, 30, 30, 0.8)'};
  backdrop-filter: blur(15px);
  box-shadow: ${(props) =>
    props.theme === 'light'
      ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05)'
      : '0 8px 32px rgba(255, 255, 255, 0.1), 0 4px 8px rgba(255, 255, 255, 0.05)'};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.theme === 'light'
        ? '0 12px 24px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)'
        : '0 12px 24px rgba(255, 255, 255, 0.15), 0 6px 12px rgba(255, 255, 255, 0.1)'};
  }
`;

// Заголовок
export const TitleStyle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.5rem;
  letter-spacing: 1.5px;
  color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
  text-shadow: ${(props) =>
    props.theme === 'light'
      ? '0 2px 4px rgba(0, 0, 0, 0.1)'
      : '0 2px 4px rgba(255, 255, 255, 0.1)'};
  animation: ${fadeIn} 0.8s ease-in-out;
`;

// Блок статистики
export const StatsStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

// Элемент статистики
export const StatItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  background: ${(props) =>
    props.theme === 'light'
      ? 'rgba(255, 255, 255, 0.6)'
      : 'rgba(0, 0, 0, 0.4)'};
  backdrop-filter: blur(10px);
  box-shadow: ${(props) =>
    props.theme === 'light'
      ? '0 4px 8px rgba(0, 0, 0, 0.05)'
      : '0 4px 8px rgba(255, 255, 255, 0.05)'};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${(props) =>
      props.theme === 'light'
        ? '0 8px 16px rgba(0, 0, 0, 0.1)'
        : '0 8px 16px rgba(255, 255, 255, 0.1)'};
  }
`;

// Счетчик
export const StatCountStyle = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
  text-shadow: ${(props) =>
    props.theme === 'light'
      ? '0 2px 4px rgba(0, 0, 0, 0.1)'
      : '0 2px 4px rgba(255, 255, 255, 0.1)'};
`;

// Подпись счетчика
export const StatLabelStyle = styled.span`
  font-size: 1rem;
  color: ${(props) => (props.theme === 'light' ? '#666' : '#ccc')};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// Блок действий
export const ActionsStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 1.2s ease-in-out;
`;

// Кнопка
const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${pulse} 1.5s infinite;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    animation: none;
  }
`;

// Кнопка "Like"
export const LikeButtonStyle = styled(ButtonStyle)`
  background: linear-gradient(145deg, #4caf50, #43a047);
  color: white;

  &:hover:not(:disabled) {
    background: linear-gradient(145deg, #43a047, #388e3c);
  }
`;

// Кнопка "Dislike"
export const DislikeButtonStyle = styled(ButtonStyle)`
  background: linear-gradient(145deg, #f44336, #e53935);
  color: white;

  &:hover:not(:disabled) {
    background: linear-gradient(145deg, #e53935, #d32f2f);
  }
`;

// Кнопка "Reset"
export const ResetButtonStyle = styled(ButtonStyle)`
  background: linear-gradient(145deg, #2196f3, #1e88e5);
  color: white;

  &:hover:not(:disabled) {
    background: linear-gradient(145deg, #1e88e5, #1976d2);
  }
`;

// Блок сброса
export const ResetSectionStyle = styled.div`
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

// Обертка компонента
export const FeedbackWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;