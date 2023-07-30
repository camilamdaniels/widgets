import React from 'react'
import WidgetBox from './WidgetBox';
import FlexBetween from './FlexBetween';
import {
    Box,
    useMediaQuery,
    useTheme,
    Button,
    Typography
} from '@mui/material'
import MyClock from './clock/MyClock';
import Weather from './weather/Weather';
import Calendar from './calendar/Calendar';
import Vocab from './vocab/Vocab';
import Music from './music/Music';
import News from './news/News';

const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b d"
    "a b d"
    "a b d"
    "a b d"
    "e f d"
    "e f d"
    "e f d"
`

const gridTemplateSmallScreens = `
    "c"
    "c"
    "a"
    "a"
    "a"
    "a"
    "a"
    "a"
    "d"
    "d"
    "d"
    "d"
    "d"
    "d"
    "b"
    "b"
    "b"
    "b"
    "b"
    "e"
    "e"
    "e"
    "f"
    "f"
    "f"
`

const Dashboard = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")
    const { palette } = useTheme()

    return (
        <Box
            color={palette.grey[100]}
            width='100%'
            height='100%'
            display='grid'
            gap='1rem'
            sx={
                isAboveMediumScreens ? {
                    gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                    gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                    gridTemplateAreas: gridTemplateLargeScreens
                } : {
                    gridAutoColumns: ".75fr",
                    gridAutoRows: "80px",
                    gridTemplateAreas: gridTemplateSmallScreens
                }
            }
        >
            <WidgetBox gridArea='a'>
                <Weather />
            </WidgetBox>

            <WidgetBox gridArea='b'>
                <Calendar />
            </WidgetBox>

            <WidgetBox gridArea='c'>
                <MyClock />
            </WidgetBox>
            
            <WidgetBox gridArea='d'>
                <News />
            </WidgetBox>
            
            <WidgetBox gridArea='e'>
                <Vocab />
            </WidgetBox>
            
            <WidgetBox gridArea='f'>
                <Music />
            </WidgetBox>
        </Box>
    )
}

export default Dashboard