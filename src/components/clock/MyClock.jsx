import React from 'react'
import Clock from 'react-live-clock';
import { Typography, Box } from '@mui/material';

const MyClock = () => {
  const today = new Date()
  const date = today.getDate()
  const day = today.getDay()
  const month = today.getMonth()

  const dayNames = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const fullDate = monthNames[month]+' '+date
  
  return (
    <Box fontSize='15px' display='flex' alignItems='center' justifyContent='space-around' sx={{ flexDirection: 'column' }}>
      <p color='#fff'>{dayNames[day]}</p>
      <Typography variant='h1' fontSize='60px'>
        <Clock format="HH:mm:ss" interval={1000} ticking={true} />
      </Typography>
      <p color='#fff'>{fullDate}</p>
    </Box>
  )
}

export default MyClock