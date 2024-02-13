import { ListItemSecondaryAction } from "@mui/material";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialstate ={
    Todo:[]
}

const user_data_slice = createSlice({
    name: "user_data",
    initialState: initialstate,
    reducers: {
        add_data: (state,actions) => {
            const Todo = {
                id:nanoid(),
                todo:actions.payload
            }
            state.Todo.push(Todo)
         },
         remove_Todo:(state,actions)=>{
         state.Todo = state.Todo.filter((items)=>
         items.id !== actions.payload
         )
         },
         DeletAll:(state)=>{
          state.Todo = []
         },
         UpdatedTodo: (state, action) => {
            const index = state.Todo.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state.Todo[index].todo = action.payload.updatedTodo;
            }
        },
    }
});

       
 
export const {add_data,remove_Todo,DeletAll,UpdatedTodo}  = user_data_slice.actions
export default user_data_slice.reducer