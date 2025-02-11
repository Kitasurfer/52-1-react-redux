import { useAppDispatch, useAppSelector } from "store/hooks";
import { adviceActions, adviceSelectors } from "store/redux/advice/adviceSlice";
import { v4 as uuidv4 } from "uuid";
import Button from "components/Button/Button";
import {
  AdviceCard,
  AdviceContainer,
  AdviceRandomizerWrapper,
  AdviceText,
  ErrorMessage
} from "./styles";

function AdviceRandomizer() {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector(adviceSelectors.adviceData);

  const handleGetAdvice = () => {
    dispatch(adviceActions.getAdvice());
  };

  const handleDeleteAll = () => {
    dispatch(adviceActions.deleteAllAdvices());
  };

  const loadingMessage = status === "loading" && "Loading advice...";
  const errorMessage = error && <ErrorMessage>Error: {error}</ErrorMessage>;
  const deleteAllButton = data.length > 0 && (
    <Button name="DELETE ALL ADVICES" onClick={handleDeleteAll} />
  );

  return (
    <AdviceRandomizerWrapper>
      <AdviceCard>
        <Button 
          name="GET ADVICE" 
          onClick={handleGetAdvice} 
          disabled={status === "loading"}
        />
        {loadingMessage}
        {errorMessage}
        <AdviceContainer>
          {data.map((advice) => (
            <AdviceText key={uuidv4()}>{advice}</AdviceText>
          ))}
        </AdviceContainer>
        {deleteAllButton}
      </AdviceCard>
    </AdviceRandomizerWrapper>
  );
}

export default AdviceRandomizer;
