import React from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import {Question} from '../features/questions/questionsSlice'
import {GameContext, GameType} from '../contexts/GameContext'
import {Answers} from '../components/Answers'

export const GameForm = ({questions}: {questions: Question[]}) => {
  const {
    hasAnsweredCurrent,
    currentQuestionIndex,
    incrementCurrentQuestionIndex,
  } = React.useContext<GameType>(GameContext)

  const handleNextClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      incrementCurrentQuestionIndex()
    },
    [],
  )

  return (
    <Grid container spacing={3} alignItems="center" justify="center">
      <Grid item xs={12}>
        <TextField
          label="Question"
          variant="outlined"
          value={questions[currentQuestionIndex].question}
          name="question"
          fullWidth
        />
      </Grid>
      <Answers
        answers={questions[currentQuestionIndex].answers}
        correct={questions[currentQuestionIndex].correct}
      />
      {hasAnsweredCurrent && (
        <Grid item xs={3} style={{textAlign: 'center'}}>
          <Button variant="contained" onClick={handleNextClick} color="primary">
            Next
          </Button>
        </Grid>
      )}
    </Grid>
  )
}
