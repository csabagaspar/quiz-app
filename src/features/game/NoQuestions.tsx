import React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import {GameContext, GameType} from '../../contexts/GameContext'

export const NoMoreQuestions = () => {
  const {restart} = React.useContext<GameType>(GameContext)

  const memoizedRestart = React.useCallback(() => restart(), [restart])

  return (
    <>
      <Grid container spacing={3} justify="center">
        <Grid item xs={5} style={{textAlign: 'center'}}>
          <Typography component="h1" variant="h4">
            No more questions
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item xs={3} style={{textAlign: 'center'}}>
          <Button
            onClick={memoizedRestart}
            variant="contained"
            color="primary"
            fullWidth
          >
            Restart
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
export const NoQuestions = () => {
  return (
    <>
      <Grid container spacing={3} justify="center">
        <Grid item xs={5} style={{textAlign: 'center'}}>
          <Typography component="h1" variant="h4">
            No questions
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
