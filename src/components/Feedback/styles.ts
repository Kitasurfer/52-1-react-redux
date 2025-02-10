import styled from "@emotion/styled";

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
`;

export const FeedbackResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const LikeDislikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Result = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Button = styled.button`
	width: 100%;
	min-height: 50px;
	outline: none;
	border: none;
	padding: 10px;
	background: #1f27f5;
	border-radius: 4px;
	color: white;
	font-family: Lato, Geneva, Tahoma, sans-serif;
	font-size: 16px;
	cursor: pointer;
`;

export const ErrorMessage = styled.div`
	height: 18px;
	color: red;
	font-size: 14px;
`;