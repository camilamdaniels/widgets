import { useTheme, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather'

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

      // const fetchData = async () => {
      //   await fetch(`${process.env.REACT_APP_API_URL}/reverse?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`)
      //   .then(result => {
      //     setGeodata(result)
      //     // console.log(result);
      //   });
      // }
      // fetchData();
    }, [latitude, longitude])

    // console.log(latitude)
    // console.log(longitude)
    console.log(process.env.REACT_APP_API_KEY)
    // console.log(geodata)

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: process.env.REACT_APP_API_KEY,
        lat: latitude ? latitude : '48.137154',
        lon: longitude ? longitude: '11.576124',
        lang: 'en',
        unit: 'imperial'
    })

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
      {(!isLoading) ? (
        <>
          <ReactWeather 
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang='en'
            locationLabel=''
            unitsLabels={{ temperature: 'F', windSpeed: 'mph'}}
            showForecast
            theme={customStyles}
          />
        </>
      ) : (
        // <Typography variant='h1'>Loading...</Typography>
        <></>
      )}
    </>
    
  )
}

export default Weather