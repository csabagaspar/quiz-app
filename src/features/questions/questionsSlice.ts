import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'

export interface Question {
  id: string
  question: string
  answers: string[]
  correct: string
}
export interface QuestionsState {
  value: Question[]
}

const initialState: QuestionsState = {
  value: [],
}

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      return {value: [...state.value, action.payload]}
    },
    removeQuestion: (state, action: PayloadAction<string>) => {
      return {
        value: state.value.filter(
          (question: Question) => action.payload !== question.id,
        ),
      }
    },
    loadQuestions: (state, action: PayloadAction<Question[]>) => {
      return {value: action.payload}
    },
  },
})

export const {addQuestion, removeQuestion} = questionsSlice.actions

export const queryQuestions = (state: RootState) => state.questions.value

export default questionsSlice.reducer
