import {useState} from "react";

const App = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([]);

    const handlerRegister = (e) => {
        e.preventDefault()
        setTasks([...tasks, task])
        setTask('')

    }
    return (

        <div>
            <h1>Cadrastrando tarefas</h1>
            <form onSubmit={handlerRegister}>
                <div>
                    <label htmlFor="name">Nome da terefa:</label> <br/>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Digite uma tarefa"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                    />
                </div>
                <br/>
                <button type="submit">Registrar</button>
            </form>
            <br/>
            <br/>
            <ul>
                {tasks.map((task, index) => (
                    <li key={task.concat(index)}>{task}</li>
                ))}
            </ul>

        </div>
    )
}


export default App
