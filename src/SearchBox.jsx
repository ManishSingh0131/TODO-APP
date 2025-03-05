import {useState} from "react"
import "./SearchBox.css"
// import Input from '@mui/joy/Input';
export default function SearchBox({addTask}){
    let [task,setTask]=useState("");
    let handleInput=(event)=>{
        setTask(event.target.value);   
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        addTask(task);
        setTask("");

    }
    return(
        <div className="InputBox">
            <form onSubmit={handleSubmit}>
            {/* <Input placeholder="enter your task"value={task} onChange={handleInput} className="inputTask" />; */}
            <input type="text" placeholder="enter your task" name="input" value={task} onChange={handleInput} className="inputTask"/>
            <button className="btn">Add</button>
            </form>
        </div>
    );
}