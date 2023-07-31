import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from '@mui/material'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Calendar = () => {
  const [open, setOpen] = useState(false)
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo])
      setTodo('')
    }
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text
    })
    setTodos(newTodos)
  }

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar readOnly/>
      </LocalizationProvider>
      
      <Button onClick={handleClickOpen}>
        View TODOS
      </Button>

      <Dialog 
        open={open} 
        onClose={handleClose} 
        PaperProps={{
          style: {
            backgroundColor: '#93e9be',
          },
        }}>
        <DialogTitle>
          <Typography variant='h3'>TO-DO</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <em>Sucess is not final, failure is not fatal: it is the courage to continue that counts.</em>
          </DialogContentText>
          <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
          <TodoList list={todos} remove={deleteTodo}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )

}

export default Calendar