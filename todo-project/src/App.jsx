import { useSelect } from '@mui/base'
import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {DeletAll, add_data} from './slilce/user_data_slice'
import {  Grid, TextField, Typography } from '@mui/material'
import { Todolist } from './Todolist'
import './App.css'
export default function App(){


const [InputValue,setInputValue] = useState('')
  const dispatch = useDispatch();
const state  = useSelector((state)=>state.user_data.Todo)
console.log(state)

const submit= (e)=>{
  e.preventDefault();
  dispatch(add_data(InputValue));
  setInputValue('')
  // console.log(state)
  
}
const changeValueHandle = (e)=>{
  setInputValue(e.target.value)
  // console.log(InputValue);
}



  return (
    <>

  <div className=' min-h-screen flex  items-center justify-center '>
   <form onSubmit={submit}>
   <Typography className='flex  items-center justify-center' variant="h4" gutterBottom>
            Todo List
          </Typography>
        <TextField 
        sx={{width:"450px"}}
          required
          value={InputValue}
          placeholder='Enter todo'
          onChange={changeValueHandle}
        />
       <div className='flex text-center justify-center gap-4 mt-4' >
       <Button sx={{backgroundColor:"#D22B2B"}} type='submit' variant="contained" >
       Add todo
      </Button>
      <Button sx={{backgroundColor:"#D22B2B"}} onClick={() => dispatch(DeletAll())} variant="contained">
      Delet all
       </Button>
       </div>
      <Todolist todo={state} />
      </form>
   </div>

  
    </>
  )
}
