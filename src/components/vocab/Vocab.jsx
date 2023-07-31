import React, { useState } from 'react'
import { 
    Box,
    Card,
    CardActions,
    CardContent,
    Typography
} from '@mui/material'
import Button from '@mui/material/Button'
import { newWord } from './words'

const bull = (
    <Box 
        component='span' 
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        .
    </Box>
)

export default function Vocab() {
    const [word, setWord] = useState(newWord())

    // console.log(word)

    let phonetic = word.phoneticSpelling.split(/\s*\-\s*/g)
    // console.log(phonetic)

    const handleClick = () => {
        setWord(newWord())
    }

    return (
        <Card sx={{ width: "100%", backgroundColor: '#66d6a2', height: "100%", borderRadius: '1rem' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14, mb: 1 }} color='#fff'>
                    Word of the Day
                </Typography>
                <Typography sx={{ display: 'inline-block' }} variant='h5' component='div'>
                    {phonetic.map((item, i) => <span key={i}>{item}{bull}</span>)}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant='h5' color='#fff'>
                    {word.partOfSpeech}
                </Typography>
                <Typography color='#fff'>
                    {word.definition}
                    <br />
                    <br />
                    <em>{word.sentence}</em>
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleClick()} size="small">New Word</Button>
            </CardActions>
        </Card>
    )
}