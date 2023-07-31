import React, { useState } from 'react'
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Checkbox,
    IconButton
} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const TodoList = ({ list, remove }) => {
    const [checked, setChecked] = useState([0])

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    return (
        <List sx={{ width: '100%', color: '#fff' }}>
            {
                list.map((value) => { // change array to "list"
                    const labelId = `list-label-${value}`

                    return (
                        <ListItem
                            key={value}
                            secondaryAction={
                                <IconButton edge='end' aria-label='delete'>
                                    <DeleteForeverIcon 
                                        sx={{ color: '#fff' }}
                                        onClick={() => {
                                            remove(value)
                                        }}
                                    />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox 
                                        sx={{ color: '#fff' }}
                                        edge='start'
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText 
                                    id={labelId} 
                                    primary={value}
                                    primaryTypographyProps={{ fontSize: '16px' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default TodoList