import React from 'react'
import {useSelector} from 'react-redux'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import {queryQuestions} from '../features/questions/questionsSlice'
import {GameContext, GameType} from '../contexts/GameContext'
import {UsernameForm} from '../features/game/UsernameForm'
import {GameInfo} from '../features/game/GameInfo'
import {NoMoreQuestions, NoQuestions} from '../features/game/NoQuestions'
import {GameForm} from '../features/game/GameForm'

export const GamePage = () => {
  const questions = useSelector(queryQuestions)
  const numberOfQuestions = questions?.length

  const {currentQuestionIndex, username} = React.useContext<GameType>(
    GameContext,
  )
  const hasMoreQuesions = React.useMemo(
    () => currentQuestionIndex >= numberOfQuestions,
    [currentQuestionIndex, numberOfQuestions],
  )

  const getPagePart = (): React.FunctionComponentElement<any> => {
    if (numberOfQuestions === 0) {
      return React.createElement(NoQuestions, null, null)
    } else if (hasMoreQuesions) {
      return React.createElement(NoMoreQuestions, null, null)
    } else {
      return React.createElement(GameForm, {questions}, null)
    }
  }

  return React.useMemo(
    () => (
      <Container component="main" maxWidth="md">
        <Typography component="h1" variant="h4">
          Quiz game
        </Typography>

        {!username ? (
          <UsernameForm />
        ) : (
          <>
            <GameInfo />
            {getPagePart()}
          </>
        )}
      </Container>
    ),
    [username, questions, hasMoreQuesions],
  )
}
