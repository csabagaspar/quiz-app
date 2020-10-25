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
        const backgroundColor: string = getBackgroundColor(
          answer,
          correct,
          selectedAnswer,
        )

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
enum AnswerColor {
  MATCHED_GREEN = 'rgba(0, 128, 0, 0.7)',
  NOT_MATCHED_RED = 'rgba(255, 0, 0, 0.7)',
  SELECTED_BLUE = 'rgba(0, 0, 255, 0.7)',
  NOT_SELECTED_GREY = 'rgba(0, 0, 0, 0.12)',
}
const getBackgroundColor = (
  answer: string,
  correct: string,
  selected: string | undefined,
): string => {
  let backgroundColor

  if (selected && answer === correct && selected === correct) {
    backgroundColor = AnswerColor.MATCHED_GREEN
  } else if (selected && answer === correct && selected !== correct) {
    backgroundColor = AnswerColor.NOT_MATCHED_RED
  } else if (selected === answer) {
    backgroundColor = AnswerColor.SELECTED_BLUE
  } else {
    backgroundColor = AnswerColor.NOT_SELECTED_GREY
  }
  return backgroundColor as string
}
