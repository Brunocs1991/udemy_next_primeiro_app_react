import Nome from "./components/Nome";
import {useState} from "react";

const App = () => {

    const [aluno, setAluno] = useState('Sujeito Programador')

    const handleChangeName = (nome) =>{
        setAluno(nome)
    }
    return (
        <div>
            <h1>My frist app</h1>
            <h2>Ola: {aluno}</h2>
            <button onClick={() => handleChangeName("Bruno")}>
                Mudar Nome
            </button>
            <Nome name="Bruno" age={20}/>
        </div>
    )
}


export default App
