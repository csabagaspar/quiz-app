import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'

export const Input = ({
  label,
  value,
  name,
}: {
  label: string
  value: string
  name: string
  //	handleChange: ({[key: string]: string}) => void;
}) => {
  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.currentTarget.value
    //   handleChange({[event.currentTarget.name]: value})
  }
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={handleTextFieldChange}
      name={name}
    />
  )
}

export const DisabledInputRadio = ({
  label,
  value,
  correct,
}: {
  label: string
  value: string
  correct: string
}) => {
  return (
    <Grid item xs={3}>
      <TextField
        label={label}
        variant="outlined"
        value={value}
        disabled
        fullWidth
      />
      <Radio
        checked={correct === value}
        inputProps={{'aria-label': 'A'}}
        disabled
      />
    </Grid>
  )
}
