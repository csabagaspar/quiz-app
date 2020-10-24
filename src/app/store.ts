import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import questionsReducer from '../features/questions/questionsSlice'
import {loadState} from './localStorage'
import {localStorageMiddleware} from './localStorageMiddleware'

const preloadedState = loadState()

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(localStorageMiddleware),
  preloadedState,
})

export type RootState = ReturnType<typeof store.getState>
