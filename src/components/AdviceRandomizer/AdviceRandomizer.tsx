import { useAppDispatch, useAppSelector } from "store/hooks";
import { adviceActions, adviceSelectors } from "store/redux/advice/adviceSlice";
import { v4 as uuidv4 } from "uuid";
import Button from "components/Button/Button";
import {
  AdviceCard,
  AdviceContainer,
  AdviceRandomizerWrapper,
  AdviceText,
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

  return (
    <AdviceRandomizerWrapper>
      <AdviceCard>
        <Button 
          name="GET ADVICE" 
          onClick={handleGetAdvice} 
          disabled={status === "loading"}
        />
        {status === "loading" && <p>Loading advice...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        <AdviceContainer>
          {data.map((advice) => (
            <AdviceText key={uuidv4()}>{advice}</AdviceText>
          ))}
        </AdviceContainer>
        {data.length > 0 && (
          <Button name="DELETE ALL ADVICES" onClick={handleDeleteAll} />
        )}
      </AdviceCard>
    </AdviceRandomizerWrapper>
  );
}

export default AdviceRandomizer;
