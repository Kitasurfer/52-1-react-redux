import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { counterSlice } from "./redux/counter/counterSlice"
import { userSlice } from "./redux/user/userSlice"
import { feedbackSlice } from "./redux/feedback/feedbackSlice"
import { randomJokesSlice } from "./redux/randomJokes/randomJokesSlice"
import { adviceSlice } from "./redux/advice/adviceSlice" 
import { adviceMiddleware } from "./redux/advice/adviceMiddleware" 


// combineSlices автоматически комбинирует редьюсеры используя их reducerPath (обычно это name слайса)
const rootReducer = combineSlices(
  counterSlice, 
  userSlice, 
  feedbackSlice, 
  randomJokesSlice, 
  adviceSlice
)

// Определяем тип глобального стейта
export type RootState = ReturnType<typeof rootReducer>

// Функция для создания store (удобно для тестирования)
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(adviceMiddleware),
    preloadedState,
  })
  // Настраиваем слушатели (setupListeners) для RTK Query (например, для refetchOnFocus)
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

// Определяем типы для store, dispatch и thunk
export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
