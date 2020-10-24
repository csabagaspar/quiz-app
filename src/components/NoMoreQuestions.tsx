import React from 'react'
import {useSelector} from 'react-redux'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import {GameContext, GameType} from '../contexts/GameContext'

export const NoMoreQuestions = () => {
  const {restart} = React.useContext<GameType>(GameContext)

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={3} style={{textAlign: 'center'}}>
        <Typography component="h1" variant="h4">
          No more questions
        </Typography>
      </Grid>
      <Grid item xs={3} style={{textAlign: 'center'}}>
        <Button onClick={() => restart()} variant="contained" color="primary">
          Restart
        </Button>
      </Grid>
    </Grid>
  )
}
