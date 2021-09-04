import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

export default function Answer({answer, onItemDelete}) {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => {onItemDelete(answer.id)}}>
            <DeleteOutlined />
          </IconButton>
        }
        title={answer.content}
        titleTypographyProps={{variant:'body1' }}
        subheader={answer.date}
        subheaderTypographyProps={{variant:'caption', color:"textSecondary" }}
        
      />
    </Card>
  );
}
