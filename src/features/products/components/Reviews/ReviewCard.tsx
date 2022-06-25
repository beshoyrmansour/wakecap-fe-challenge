import React from 'react'

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Reviews } from '../../../../../../wakecap-fe-challenge/src/models/Reviews';
import { red, blue } from '@mui/material/colors';

const ReviewCard = ({ review }: { review: Reviews }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar >
        <Avatar sx={{ bgcolor: review.score > 4.6 ? blue[500] : red[500] }}>
          {review.score}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={review.review} />
    </ListItem >
  )
}

export default ReviewCard