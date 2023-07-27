import React from 'react'
import { useTheme, Typography } from '@mui/material'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import FlexBetween from './FlexBetween';

const Header = () => {
    const { palette } = useTheme()

  return (
    <FlexBetween 
        gap="1.5rem" 
        color={palette.primary[100]} 
        mb='.75rem' 
        bgcolor={palette.primary[400]}
        padding='.75rem .75rem .75rem .75rem'
    >
        <Typography variant="h4">
            Hello, world.
        </Typography>
        <WavingHandIcon />
    </FlexBetween>
  )
}

export default Header