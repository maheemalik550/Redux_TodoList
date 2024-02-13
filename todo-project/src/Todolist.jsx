import { Result } from 'postcss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import {  UpdatedTodo, add_data, remove_Todo } from './slilce/user_data_slice'
import { useState } from 'react';
import { IconButton, TextField } from '@mui/material';


export const Todolist = (props) => {

    const [Input, setInput] = useState(-1);
    const [updatedTodo, setUpdatedTodo] = useState('');

    const state = useSelector((state)=>state.user_data.Todo)
    console.log(state);

    const dispatch = useDispatch()
    const data = props.todo
    console.log('result', data);


    const handleInputChange = (e) => {
        setUpdatedTodo(e.target.value);

    }

    const handleUpdate = (id)=>{
        dispatch(UpdatedTodo({ id,updatedTodo}))
        setInput(-1)
        setUpdatedTodo('')

    }
    return (
        <div>
         {
         state.map((items) => {
             const { id, todo } = items
             return (
                <div style={{backgroundColor:"#D8BFD8",borderRadius:"7px",padding:"10px",
                marginBottom:"5px", marginTop:"7px"
                }}>
            <li style={{display: 'flex', justifyContent: 'space-between',
             alignItems: 'center'}} key={id} id={id} >{todo}
             {Input === items.id ? (
                <>
                <TextField
                placeholder='updated Todo'
                onChange={handleInputChange}
                />
                 <IconButton onClick={() => handleUpdate(items.id)} aria-label="delete">
                   <EditIcon sx={{color:"#D22B2B"}} />
                 </IconButton>
                </>
             ):(
               <>
               <div>
               <IconButton  onClick={() => dispatch(remove_Todo(id))} aria-label="delete">
                   <DeleteIcon sx={{color:"#D22B2B"}} />
                 </IconButton>
                 <IconButton  onClick={()=>setInput(items.id)} aria-label="delete">
                   <EditIcon sx={{color:"#D22B2B"}} />
                 </IconButton>
               </div>
                
               </>
             )
             }
                </li>
                </div>
             )
            })
           
            }
        </div>
    )
}
