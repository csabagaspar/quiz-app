import {Middleware} from 'redux'
import {RootState} from './store'
import {saveState} from './localStorage'
import {
  addQuestion,
  removeQuestion,
  Question,
} from '../features/questions/questionsSlice'

export const localStorageMiddleware = (store) => (next) => (action) => {
  const {type, payload} = action
  if (type === addQuestion.type) {
    const previewQuestions = store.getState().questions.value
    saveState({
      questions: {
        value: [...previewQuestions, payload],
      },
    })
  }
  if (type === removeQuestion.type) {
    const previewQuestions = store.getState().questions.value
    const updatedQuestion = previewQuestions.filter(
      (question: Question) => payload !== question.id,
    )
    saveState({
      questions: {
        value: [...updatedQuestion],
      },
    })
  }
  return next(action)
}
