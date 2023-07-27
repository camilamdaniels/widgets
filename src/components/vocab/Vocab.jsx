import React from 'react'
import { 
    Box,
    Card,
    CardActions,
    CardContent,
    Typography
} from '@mui/material'
import Button from '@mui/material/Button'

const bull = (
    <Box
        component='span'
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        .
    </Box>
)

export default function Vocab() {
    return (
        <Card sx={{ minWidth: 400, backgroundColor: '#66d6a2', maxHeight: 200 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14}} color='#fff' gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant='h5' component='div'>
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='#fff'>
                    adjective
                </Typography>
                <Typography color='#fff'>
                    well meaning and kindly.
                    <br />
                    {"a benevolent smile"}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">New Word</Button>
            </CardActions>
        </Card>
    )
}