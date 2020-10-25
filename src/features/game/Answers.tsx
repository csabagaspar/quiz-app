import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import {GameContext, GameType} from '../../contexts/GameContext'

export const Answers = ({
  answers,
  correct,
}: {
  answers: string[]
  correct: string
}) => {
  const {
    hasAnsweredCurrent,
    toggleAnsweredCurrent,
    incrementScore,
  } = React.useContext<GameType>(GameContext)

  const [selectedAnswer, setSelectedAnswer] = React.useState<
    string | undefined
  >(() => '')

  const handleAnswerClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const answer = event.currentTarget.dataset['answer']
      setSelectedAnswer(() => answer)
      if (answer === correct) {
        incrementScore()
      }
      toggleAnsweredCurrent()
    },
    [correct, incrementScore, toggleAnsweredCurrent],
  )

  return (
    <>
      {answers.map((answer: string, index: number) => {
        let backgroundColor

        if (
          selectedAnswer &&
          answer === correct &&
          selectedAnswer === correct
        ) {
          backgroundColor = 'rgba(0, 128, 0, 0.7)'
        } else if (
          selectedAnswer &&
          answer === correct &&
          selectedAnswer !== correct
        ) {
          backgroundColor = 'rgba(255, 0, 0, 0.7)'
        } else if (selectedAnswer === answer) {
          backgroundColor = 'rgba(0, 0, 255, 0.7)'
        } else {
          backgroundColor = 'rgba(0, 0, 0, 0.12)'
        }
        return (
          <Grid item xs={3} key={index} style={{textAlign: 'center'}}>
            {hasAnsweredCurrent ? (
              <Button
                variant="contained"
                disabled
                fullWidth
                style={{backgroundColor: `${backgroundColor}`}}
              >
                {answer}
              </Button>
            ) : (
              <Button
                variant="contained"
                data-answer={answer}
                fullWidth
                onClick={handleAnswerClick}
              >
                {answer}
              </Button>
            )}
          </Grid>
        )
      })}
    </>
  )
}
