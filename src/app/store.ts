import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import questionsReducer from '../features/questions/questionsSlice'

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
	  thunk: false,
	  immutableCheck: false,
	  serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>
