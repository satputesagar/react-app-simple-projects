import React,{useState,useEffect} from "react";
import "./Todo.css";

// function Task({task}){
//     return(
//         <div className="task"
//         style={{textDecoration:task.completed ? "link-through":""}}
//         >
//         {task.title}
//         </div>
//     );
// }

// Create Task
function CreateTask({addTask}){
    const [value,setValue]=useState("");

    const handleSubmit =e =>{
        e.preventDefault();
        if(!value) return;

        addTask(value);
        setValue("");
    }
    return(
        <form onSubmit={handleSubmit}>
        <input type="text"
        className="input"
        value={value}
        placeholder ="Add a new task"
        onChange={e => setValue(e.target.value)}/>

        </form>
    );
}

// completing a task key value
// remove task 
function Task({task,index,completeTask,removeTask}){
    return(
        <div className="task"
        style={{textDecoration:task.completed ? "line-through":""}}
        >
            {task.title}
            <button style={{background:"red"}} onClick={()=>removeTask(index)}>x</button>
            <button onClick={()=>completeTask(index)}>
            completed</button>
        </div>
    );
}

// REmove a task


function Todo(){
    const [taskRemaining,setTasksRemaining]=useState(0);
                    const [tasks,setTasks] =useState([
                        {
                            title:"Grab some Pizza",
                            completed:true,
                        },
                        {
                            title:"Do Your Workout",
                            completed:true,
                        },
                        {
                            title:"Hangout With Friends",
                            completed:false,
                        }
                    ]);
                    // remainder use Effeect
                useEffect(()=>{
                    setTasksRemaining(tasks.filter(task=>!task.completed).length)
                });
                    // add task
        const addTask=title=>{
            const newTasks=[...tasks,{title,completed:false}];
            setTasks(newTasks);
        };
// complete task
        const completeTask =index =>{
            const newTasks=[...tasks];
            newTasks[index].completed=true;
            setTasks(newTasks);
        };
// remove task
        const removeTask=index=>{
            const newTasks=[...tasks];
            newTasks.splice(index,1);
            setTasks(newTasks);
        };

    return(
        <div className="todo-container">
        <div className="header">Pending Tasks({taskRemaining})</div>

        <div className="tasks">
            {tasks.map((task ,index )=> (
                <Task
                 task={task}
                index={index}
                completeTask={completeTask}
                removeTask={removeTask}
                key={index}/>

            ))}
            </div>
            {/* add create task  */}
        <div className="create-task">
            <CreateTask addTask={addTask}/>
            </div>


        </div>

    );


}

export default Todo;