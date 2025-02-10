import { Middleware } from "@reduxjs/toolkit";
import axios from "axios";
import { adviceActions } from "./adviceSlice";

export const adviceMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type === adviceActions.getAdvice.type) {
    // Передаём действие дальше, чтобы редьюсер обновил состояние (например, установил "loading")
    next(action);

    // Асинхронный запрос для получения совета
    (async () => {
      try {
        // В adviceMiddleware.ts проверяем структуру ответа:
        const response = await axios.get("https://api.adviceslip.com/advice");
        if (response.data?.slip?.advice) {
          store.dispatch(adviceActions.getAdviceSuccess(response.data.slip.advice));
        } else {
          throw new Error("Invalid API response structure");
        }
        
      } catch (error) {
        store.dispatch(adviceActions.getAdviceFailure(error.message));
      }
    })();

    // Прерываем выполнение, чтобы не вызывать next(action) повторно
    return;
  }
  return next(action);
};
