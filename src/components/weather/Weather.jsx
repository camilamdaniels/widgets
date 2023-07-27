import React from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather'

const Weather = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '6533e6634dc61ad17ee40480603e25e7',
        lat: '48.137154',
        lon: '11.576124',
        lang: 'en',
        unit: 'metric' // change to imperial for US
    })

    const customStyles = {
        fontFamily: 'Inter, sans-serif',
        gradientStart: '#66d6a2',
        gradientMid: '#66d6a2',
        gradientEnd: '#a8edcb',
        forecastIconColor: '#fff',
        todayIconColor: '#fff',
        borderRadius: '3rem'
    }
  return (
    <ReactWeather 
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang='en'
        locationLabel='Munich'
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h'}}
        showForecast
        theme={customStyles}
    />
  )
}

export default Weather