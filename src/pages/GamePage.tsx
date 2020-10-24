import React from 'react'
import {useSelector} from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import {queryQuestions, Question} from '../features/questions/questionsSlice'
import {GameContext, GameType} from '../contexts/GameContext'
import {UsernameForm} from '../components/UsernameForm'
import {GameInfo} from '../components/GameInfo'
import {NoMoreQuestions} from '../components/NoMoreQuestions'
import {GameForm} from '../components/GameForm'

export const GamePage = () => {
  const questions = useSelector(queryQuestions)
  const {currentQuestionIndex, username} = React.useContext<GameType>(
    GameContext,
  )

  return (
    <Container component="main" maxWidth="md">
      <Typography component="h1" variant="h4">
        Quiz game
      </Typography>

      {!username ? (
        <UsernameForm />
      ) : (
        <>
          <GameInfo />
          {currentQuestionIndex >= questions.length ? (
            <NoMoreQuestions />
          ) : (
            <GameForm questions={questions} />
          )}
        </>
      )}
    </Container>
  )
}
