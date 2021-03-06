import React from 'react'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'

export const InputRadio = React.memo(
  ({
    label,
    inputValue,
    name,
    checked,
    radioValue,
    handleChange,
  }: {
    label: string
    inputValue: string
    name: string
    checked: boolean
    radioValue: number
    handleChange: (any) => void
  }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value
      handleChange({[event.currentTarget.name]: value})
    }
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleChange({correct: Number(event.target.value)})
    }

    return (
      <Grid item xs={3}>
        <FormControl required fullWidth>
          <div style={{display: 'flex'}}>
            <Radio
              checked={checked}
              onChange={handleRadioChange}
              value={radioValue}
            />
            <Input
              placeholder={label}
              value={inputValue}
              onChange={handleInputChange}
              name={name}
            />
          </div>
        </FormControl>
      </Grid>
    )
  },
)

export const DisabledInputRadio = React.memo(
  ({
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
        <div style={{display: 'flex'}}>
          <Radio checked={correct === value} disabled />
          <TextField
            label={label}
            variant="outlined"
            value={value}
            disabled
            fullWidth
          />
        </div>
      </Grid>
    )
  },
)
