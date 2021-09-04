import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import {makeStyles}  from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: '#C62828',
    cursor: 'pointer'
  }
})

export default function Question({question, onItemDelete, onAnswersClicked}) {
  const classes = useStyles()

  return (
    <div>
      <Card elevation={3}>
          <CardHeader
            avatar={
              <Avatar 
              className={classes.avatar}
              onClick = {() => {onAnswersClicked(question.id)}}
              >
                {question.answers.length}
              </Avatar>
              }  
              action={
              <IconButton onClick={() => {onItemDelete(question.id)}}>
                <DeleteOutlined  />
              </IconButton>
              }
            title={question.content}
            titleTypographyProps={{variant:'h6' }}
          >
            
          </CardHeader>
          <CardContent>
            <Typography variant="caption" color="textSecondary">
              { question.date }
            </Typography>
          </CardContent>
      </Card>
    </div>
  )
}