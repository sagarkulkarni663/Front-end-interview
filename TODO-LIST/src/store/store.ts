import {configureStore} from "@reduxjs/toolkit"
import todoList from "./todoSlice";


const store=configureStore({
    reducer:{
        todoList:todoList
    }
})

export default store




