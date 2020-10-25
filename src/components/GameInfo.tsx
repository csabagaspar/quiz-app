import React from 'react'
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import {GameContext, GameType} from '../contexts/GameContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(20),
        height: theme.spacing(10),
      },
    },
  }),
)

const Username = ({value}: {value: string | null}) => {
  return (
    <Typography variant="subtitle1" component="h2" align="center">
      Username: {value}
    </Typography>
  )
}
const Score = ({value}: {value: number}) => {
  return (
    <Typography variant="subtitle2" component="h2" align="center">
      Score: {value}
    </Typography>
  )
}

export const GameInfo = React.memo(() => {
  const classes = useStyles()
  const {username, score} = React.useContext<GameType>(GameContext)

  return React.useMemo(
    () => (
      <Grid container spacing={3} justify="flex-end">
        <Grid item xs={3}>
          <div className={classes.root}>
            <Paper variant="outlined">
              <Username value={username} />
              <Score value={score} />
            </Paper>
          </div>
        </Grid>
      </Grid>
    ),
    [username, score],
  )
})
