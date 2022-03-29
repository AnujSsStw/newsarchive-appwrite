import react, { useState } from "react";
import { Button } from '@mantine/core';
import { Cal } from './firebase';
let globalid = 0


function App() {
    const [task, setTask] = useState("")
    const [ToDo, DisplayToDo] = useState([])


    function CreateToDo(event) {
        event.preventDefault()

        DisplayToDo(existingToDo => {
            setTask("")
            return [...existingToDo, { todo: task, id: globalid++ }]
        })
    }

    function DeleteItem(itemId) {
        DisplayToDo(oldtodo => oldtodo.filter(item => item.id != itemId))
    }

    return <div>
        <h1>ToDo App</h1>

        <form onSubmit={CreateToDo}>
            <input type="text" value={task} onChange={after => {
                setTask(after.target.value)
            }} />
            <button type="submit">Create ToDo</button>
        </form>


        <ul>
            {ToDo.map((item) => {
                return <div key={item.id}>
                    <li>{item.todo}</li>
                    <button onClick={() => DeleteItem(item.id)}>Delete</button>
                </div>
            })}
        </ul>

        <MyApp />
        <Cal />

    </div>
}


function MyApp() {
    return <Button>HEllo</Button>;
}

export default App