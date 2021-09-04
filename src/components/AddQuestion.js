import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function AddQuestion({createQuestion}) {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)

    if (title === '') {
      setTitleError(true)
    }else {
        document.getElementById("inputContent").value='';
        createQuestion(title);
    } 

  }

  return (
    <Container size="sm" style={{  border: '1px solid #C62828', borderRadius: '5px', padding: '15px', marginTop:'20px'}}>
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create New Question
      </Typography>
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 

          id="inputContent"  
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Question" 
          color="primary" 
          fullWidth
          multiline
          required
          error={titleError}
        />

        <Button
          type="submit" 
          color="secondary" 
          variant="contained">
          Post
        </Button>
      </form>      
    </Container>
  )
}