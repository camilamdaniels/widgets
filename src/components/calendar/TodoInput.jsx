import React from 'react'
import { Button, TextField } from '@mui/material'

const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <>
        <TextField 
            autoFocus
            margin='dense'
            id='name'
            type='text'
            fullWidth
            variant='standard'
            value={todo}
            onChange={(e) => {
                setTodo(e.target.value)
            }}
            sx={{ input: {color: '#fff'} }}
        />
        <Button onClick={addTodo}>Add todo</Button>
    </>
  )
}

export default TodoInput