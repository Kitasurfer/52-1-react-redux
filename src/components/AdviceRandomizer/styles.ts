import styled from "@emotion/styled";

export const AdviceRandomizerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2196f3;
  flex: 1;
  padding: 50px;
`;

export const AdviceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 700px;
  min-height: 400px;
  padding: 20px;
  background-color: white;
  border: 2px solid #1976d2;
  border-radius: 10px;
`;

export const AdviceContainer = styled.div`
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;

export const AdviceText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;
