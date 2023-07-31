import React, { useState, useEffect } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardHeader,
  IconButton,
  Avatar,
  useTheme,
  Box,
  LinearProgress
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const News = () => {
  const { palette } = useTheme()
  const [data, setData] = useState(null)
  const [articles, setArticles] = useState([])

  const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  const ioUrl=`https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_IO_API_KEY}&country=us&category=technology&language=en`

  useEffect(() => {
    const fetchData = async () => {
      await fetch(ioUrl)
        .then(res => res.json())
        .then(result => {
          setData(result)
          // console.log(result)
        })
    }

    fetchData()
  }, {})

  // if (data) {
  //   // console.log(data.results)

  //   const filterByImage = (item) => {
  //     if (item.image_url !== null) return true
  //   }

  //   setArticles(data.results.filter(filterByImage))
  // }

  // console.log(articles)

  // const firstArticle = data ? data.articles[0] : {}

  const description = data ? data.results[0].description.split(/(?<=[.!?])\s+/) : ''

  return (
    <>
    {(data !== null) ? (
      <Card sx={{ width: "100%", height: "100%", bgcolor: '#66d6a2', color: '#fff' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#e75480' }} aria-label='article'>
              News
            </Avatar>
          }
          title={data.results[0].title}
          subheader={data.results[0].creator}
        />
        <CardMedia 
          sx={{ height: 250 }}
          image={data.results[0].image_url ? data.results[0].image_url : require('./lizard.jpg')}
          title="today's news"
        />
        <CardContent>
          <Typography sx={{ textTransform: 'uppercase' }} gutterBottom variant='h5' component='div'>
            {data.results[0].category}
          </Typography>
          <Typography variant='body2'>
            {description[0]}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={data.results[0].link} size='small'>Full Article</Button>
        </CardActions>
      </Card>
      ) : (
        <Box sx={{ width: '75%' }}>
          <Typography variant='h1'>Loading...</Typography>
          <LinearProgress />
        </Box>
      )}
    </>
  )
}

export default News