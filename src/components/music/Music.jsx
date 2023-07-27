import React from 'react'
import { 
    useTheme,
    Box,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography
} from '@mui/material'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'

const Music = () => {
    const theme = useTheme()

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#66d6a2' }}>
                <CardContent sx={{ flex: '1 0 auto'}}>
                    <Typography component='div' variant='h5'>
                        Live From Space 
                    </Typography>
                    <Typography color='#fff' component='div' fontSize='20px'>
                        Mac Miller
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 2 }}>
                    <IconButton aria-label='previous'>
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label='play/pause'>
                        <PlayArrowIcon sx={{ height: 38, width: 38}}/>
                    </IconButton>
                    <IconButton aria-label='next'>
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>
            </Box>
            <CardMedia 
                component='img'
                sx={{ width: 151 }}
                image={require('./album-cover.jpg')}
                alt='Live From Space Cover Art'
            />
        </Card>
    )
}

export default Music