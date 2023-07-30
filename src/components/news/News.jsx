import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardHeader,
  IconButton,
  Avatar
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const News = () => {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: '#66d6a2', color: '#fff' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#e75480' }} aria-label='article'>
            N
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title="The Wonderful World of Lizards"
        subheader='September 14, 2016'
      />
      <CardMedia 
        sx={{ height: 250 }}
        image={require('./lizard.jpg')}
        title="today's news"
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Lizard
        </Typography>
        <Typography variant='body2'>
          Lizards are a widespread group of squamate reptiles, with over 6,0000
          species, ranging across all continents except Antartica.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Full Article</Button>
      </CardActions>
    </Card>
  )
}

export default News