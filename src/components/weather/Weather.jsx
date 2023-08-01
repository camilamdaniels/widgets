import { useTheme, Typography, LinearProgress, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ReactWeather, { useOpenWeather, useVisualCrossing, useWeatherBit } from 'react-open-weather'

const Weather = () => {
    const { palette } = useTheme()
    
    const [latitude, setLat] = useState([]);
    const [longitude, setLong] = useState([]);
    const [geodata, setGeodata] = useState([]);

    useEffect(() => {
      const getUserCoordinates = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
      }
  
      getUserCoordinates()
  
      console.log(latitude)
      console.log(longitude)

      const fetchData = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/reverse?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
            setGeodata(result)
            // console.log(result);
          });
      }

      // const fetchData = async () => {
      //   await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${process.env.REACT_APP_VC_API_KEY}`)
      //     .then(res => res.json())
      //     .then(result => {
      //       setGeodata(result)
      //       console.log(result)
      //     })
      // }

      // const fetchData = async () => {
      //   await fetch (`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${process.env.REACT_APP_WB_API_KEY}&include=minutely`)
      //      .then(res => res.json())
      //         .then(result => {
      //       setGeodata(result)
      //       console.log(result)
      //     })
      // }
      fetchData()
    }, [latitude, longitude])

    // console.log(latitude)
    // console.log(longitude)
    // console.log(process.env.REACT_APP_API_KEY)
    if (geodata) console.log(geodata)

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: process.env.REACT_APP_API_KEY,
        lat: latitude ? latitude : '48.137154',
        lon: longitude ? longitude: '11.576124',
        lang: 'en',
        unit: 'imperial'
    })

    // const { data, isLoading, errorMessage } = useVisualCrossing({
    //   key: process.env.REACT_APP_VC_API_KEY,
    //   lat: latitude ? latitude : '48.137154',
    //   lon: longitude ? longitude : '11.576124',
    //   lang: 'en',
    //   unit: 'us'
    // })

    // const { data, isLoading, errorMessage } = useWeatherBit({
    //   key: process.env.REACT_APP_WB_API_KEY,
    //   lat: latitude ? latitude : '48.137154',
    //   lon: longitude ? longitude : '11.576124',
    //   lang: 'en',
    //   unit: 'I'
    // })

    const customStyles = {
        fontFamily: 'Inter, sans-serif',
        gradientStart: palette.primary[300],
        gradientMid: palette.primary[300],
        gradientEnd: palette.primary[100],
        forecastIconColor: palette.grey[100],
        todayIconColor: palette.grey[100],
        borderRadius: '3rem'
    }
  return (
    <>
      {(!errorMessage) ? (
        <Box sx={{ width: '100%', height: '100%', bordeeRadius: '1rem' }}>
          <ReactWeather 
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang='en'
            locationLabel={geodata ? geodata[0].name : ''} // try ternary w/ errorMessage
            unitsLabels={{ temperature: 'F', windSpeed: 'mph'}}
            showForecast
            theme={customStyles}
          />
        </Box>
      ) : (
        <Box sx={{ width: '75%' }}>
          <Typography variant='h1'>Loading...</Typography>
          <LinearProgress />
        </Box>
      )}
    </>
    
  )
}

export default Weather