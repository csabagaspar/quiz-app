import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import {removeQuestion, queryQuestions, Question} from './questionsSlice'
import {DisabledInputRadio} from '../../components/Input'
import {ANSWER_LABELS} from './constans'

export function QuestionList() {
  const questions = useSelector(queryQuestions)
  const dispatch = useDispatch()

  const handleDeleteQuestion = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const id = event.currentTarget.dataset['id']

      if (id) {
        dispatch(removeQuestion(id))
      }
    },
    [dispatch],
  )

  return questions?.length > 0 ? (
    <>
      <Typography component="h1" variant="h6">
        Questions
      </Typography>
      <List>
        {questions.map((question: Question) => (
          <ListItem key={question.id}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Question"
                  variant="outlined"
                  value={question.question}
                  disabled
                  fullWidth
                />
              </Grid>
              {question.answers.map((answer: string, index: number) => {
                return (
                  <DisabledInputRadio
                    key={`answer-${index}`}
                    label={ANSWER_LABELS[index]}
                    value={answer}
                    correct={question.correct}
                  />
                )
              })}
            </Grid>

            <ListItemSecondaryAction
              data-id={question.id}
              onClick={handleDeleteQuestion}
              style={{right: '0'}}
            >
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  ) : null
}
