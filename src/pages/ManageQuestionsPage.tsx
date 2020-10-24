import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import {QuestionForm} from '../features/questions/QuestionForm'
import {QuestionList} from '../features/questions/QuestionList'

export const ManageQuestionsPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <Typography component="h1" variant="h4">
        Manage questions
      </Typography>
      <QuestionList />
      <QuestionForm />
    </Container>
  )
}
