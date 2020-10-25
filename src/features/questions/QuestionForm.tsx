import React from 'react'
import {useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import {InputRadio} from '../../components/Input'
import Input from '@material-ui/core/Input'
import {ANSWER_LABELS, ANSWER_NAMES} from './constans'

import {addQuestion} from './questionsSlice'

const getInitFormState = () => ({
  question: '',
  A: '',
  B: '',
  C: '',
  D: '',
  correct: 0,
})

export function QuestionForm() {
  const dispatch = useDispatch()

  const [{question, A, B, C, D, correct}, setState] = React.useReducer(
    (state, newState) => ({...state, ...newState}),
    getInitFormState(),
  )

  const handleAdd = React.useCallback(
    (event: React.FormEvent<EventTarget>) => {
      event.preventDefault()
      const answers = [A, B, C, D]
      dispatch(
        addQuestion({
          id: uuidv4(),
          question,
          answers,
          correct: answers[correct],
        }),
      )
      setState(getInitFormState())
    },
    [dispatch, question, A, B, C, D, correct],
  )

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setState({[event.currentTarget.name]: value})
  }

  const handleAnswerChange = React.useCallback((value: any) => {
    setState(value)
  }, [])

  return (
    <>
      <Typography component="h1" variant="h6">
        Add question
      </Typography>

      <form onSubmit={handleAdd}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl required fullWidth>
              <Input
                autoFocus
                placeholder="Question"
                value={question}
                onChange={handleQuestionChange}
                name="question"
              />
            </FormControl>
          </Grid>
          {[A, B, C, D].map((answer: string, index: number) => {
            return (
              <InputRadio
                key={`answerform-${index}`}
                label={ANSWER_LABELS[index]}
                inputValue={answer}
                name={ANSWER_NAMES[index]}
                checked={correct === index}
                radioValue={index}
                handleChange={handleAnswerChange}
              />
            )
          })}
        </Grid>
        <Grid container spacing={3} justify="flex-end">
          <Grid item xs={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
              fullWidth
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
