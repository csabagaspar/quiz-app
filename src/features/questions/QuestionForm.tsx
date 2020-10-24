import React from 'react'
import {useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import {Input} from '../../components/Input'

import {addQuestion} from './questionsSlice'

const resetFormState = () => ({
  question: 'question',
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  correct: 0,
})

export function QuestionForm() {
  const dispatch = useDispatch()

  const [{question, A, B, C, D, correct}, setState] = React.useReducer(
    (state, newState) => ({...state, ...newState}),
    resetFormState(),
  )

  const handleAdd = (event: React.FormEvent<EventTarget>) => {
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
    setState(resetFormState())
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({correct: Number(event.target.value)})
  }
  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.currentTarget.value
    setState({[event.currentTarget.name]: value})
  }

  return (
    <>
      <Typography component="h1" variant="h6">
        Add question
      </Typography>

      <form onSubmit={handleAdd} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl required fullWidth>
              <TextField
                label="Question"
                variant="outlined"
                value={question}
                onChange={handleTextFieldChange}
                name="question"
              />
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <FormControl required fullWidth>
              <TextField
                label="Answer A"
                variant="outlined"
                value={A}
                onChange={handleTextFieldChange}
                name="A"
              />
              <Radio
                checked={correct === 0}
                onChange={handleRadioChange}
                value={0}
                inputProps={{'aria-label': 'A'}}
              />
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <FormControl required fullWidth>
              <TextField
                label="Answer B"
                variant="outlined"
                value={B}
                onChange={handleTextFieldChange}
                name="B"
              />
              <Radio
                checked={correct === 1}
                onChange={handleRadioChange}
                value={1}
                inputProps={{'aria-label': 'B'}}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl required fullWidth>
              <TextField
                label="Answer C"
                variant="outlined"
                value={C}
                onChange={handleTextFieldChange}
                name="C"
              />
              <Radio
                checked={correct === 2}
                onChange={handleRadioChange}
                value={2}
                inputProps={{'aria-label': 'C'}}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl required fullWidth>
              <TextField
                label="Answer D"
                variant="outlined"
                value={D}
                onChange={handleTextFieldChange}
                name="D"
              />
              <Radio
                checked={correct === 3}
                onChange={handleRadioChange}
                value={3}
                inputProps={{'aria-label': 'D'}}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="flex-end">
          <Grid item xs={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
