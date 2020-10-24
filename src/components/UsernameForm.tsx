import React from 'react'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'

import {GameContext, GameType} from '../contexts/GameContext'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}))

export const UsernameForm = () => {
  const classes = useStyles()
  const {updateUsername} = React.useContext<GameType>(GameContext)
  const [username, setUsername] = React.useState<string>(() => '')

  const handleSetUsername = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()
    updateUsername(username)
  }
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const username = event.currentTarget.value
    setUsername(() => username)
  }
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Username
        </Typography>
        <form onSubmit={handleSetUsername} className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleUsernameChange}
              value={username}
            />
          </FormControl>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Set
          </Button>
        </form>
      </div>
    </Container>
  )
}
