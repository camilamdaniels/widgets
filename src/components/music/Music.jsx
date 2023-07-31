import React, { useState } from 'react'
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
import PauseIcon from '@mui/icons-material/Pause'
import Sound from 'react-sound'
import Song from './Song.mp3'

const Music = ( ) => {
    const theme = useTheme()
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#66d6a2' }}>
                <CardContent sx={{ flex: '1 0 auto'}}>
                    <Typography component='div' variant='h5'>
                        Tokyo Cafe 
                    </Typography>
                    <Typography color='#fff' component='div' fontSize='20px'>
                        TVARI
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 2 }}>
                    <IconButton aria-label='previous'>
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label='play/pause' onClick={() => setIsPlaying(!isPlaying)}>
                        {!isPlaying ? <PlayArrowIcon sx={{ height: 38, width: 38}}/> : <PauseIcon sx={{ height: 38, width: 38}}/>}
                    </IconButton>
                    <IconButton aria-label='next'>
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>
            </Box>
            <Sound 
                url={Song}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={300}
            />
            <CardMedia 
                component='img'
                sx={{ width: 151 }}
                image={require('./album-cover.jpg')}
                alt='Tokyo Cafe Cover Art'
            />
        </Card>
    )
}

export default Music