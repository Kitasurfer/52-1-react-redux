import styled from "@emotion/styled";

export const CounterWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px;
  text-align: center;
`;

export const CounterTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const CounterButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const CounterButton = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  background: #4caf50;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #45a049;
  }

  &:active {
    background: #3e8e41;
  }
`;
