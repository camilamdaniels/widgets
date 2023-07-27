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

const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b d"
    "a b d"
    "e f g"
    "e f g"
`

const gridTemplateSmallScreens = `
    "c"
    "c"
    "c"
    "a"
    "a"
    "a"
    "a"
    "a"
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
    "g"
    "g"
    "g"
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
            gap='4rem'
            sx={
                isAboveMediumScreens ? {
                    gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                    gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                    gridTemplateAreas: gridTemplateLargeScreens
                } : {
                    gridAutoColumns: "1fr",
                    gridAutoRows: "80px",
                    gridTemplateAreas: gridTemplateSmallScreens
                }
            }
        >
            <WidgetBox gridArea='a'></WidgetBox>
            <WidgetBox gridArea='b'></WidgetBox>
            <WidgetBox gridArea='c'></WidgetBox>
            <WidgetBox gridArea='d'></WidgetBox>
            <WidgetBox gridArea='e'></WidgetBox>
            <WidgetBox gridArea='f'></WidgetBox>
            <WidgetBox gridArea='g'></WidgetBox>
        </Box>
    )
}

export default Dashboard