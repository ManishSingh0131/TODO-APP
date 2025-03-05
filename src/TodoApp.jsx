import SearchBox from "./SearchBox"
import TaskBox from "./TaskBox"
import {useState} from "react"
import "./TodoApp.css"

export default function TodoApp(){
    let [list,setList]=useState([]);

    const addTask=(value)=>{
        setList([...list,value]);
    }
    const handleDel=(idx)=>{
        setList(list.filter((_, index) => index !== idx));
         
    }
    return(
        <div className="app">
            <SearchBox addTask={addTask}/>
            <h1 className="todo">TODO</h1>
            <hr />
            <TaskBox list={list} handleDel={handleDel}/>
        </div>
    );
}