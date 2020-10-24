import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import {removeQuestion, queryQuestions} from './questionsSlice'
import {DisabledInputRadio} from '../../components/Input'

export function QuestionList() {
  const questions = useSelector(queryQuestions)
  const dispatch = useDispatch()

  const handleDeleteQuestion = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const id = event.currentTarget.dataset['id']

    if (id) {
      dispatch(removeQuestion(id))
    }
  }

  return questions?.length > 0 ? (
    <>
      <Typography component="h1" variant="h6">
        Questions
      </Typography>
      <List dense={false}>
        {questions.map((question) => (
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
              <DisabledInputRadio
                label="Answer A"
                value={question.answers[0]}
                correct={question.correct}
              />
              <DisabledInputRadio
                label="Answer B"
                value={question.answers[1]}
                correct={question.correct}
              />
              <DisabledInputRadio
                label="Answer C"
                value={question.answers[2]}
                correct={question.correct}
              />
              <DisabledInputRadio
                label="Answer D"
                value={question.answers[3]}
                correct={question.correct}
              />
            </Grid>

            <ListItemSecondaryAction
              data-id={question.id}
              onClick={handleDeleteQuestion}
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
