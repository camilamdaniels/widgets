import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar readOnly/>
    </LocalizationProvider>
  )

}

export default Calendar