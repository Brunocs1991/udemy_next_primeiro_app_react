import {useState} from "react";

const App = () => {
    const [name, setName]  =useState('');
    const [email, setEmail]  =useState('');
    const [age, setAge]  =useState('');

    const [user, setUser] = useState({})
    const handlerRegister = (e) =>{
        e.preventDefault()
        setUser({name, email, age})
    }
    return (

        <div>
            <h1>Cadrastrando usuário</h1>
            <form onSubmit={handlerRegister}>
                <div>
                    <label htmlFor="name">Nome:</label> <br/>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Digite o seu nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label> <br/>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Digite o seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="age">Idade:</label> <br/>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder="Digite sua idade"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </div>
                <br/>
                <button type="submit">Registrar</button>
            </form>
            <br/>
            <br/>
            <div>
                <span>Bem vindo: {user.name}</span>
                <br/>
                <span>Idade: {user.age}</span>
                <br/>
                <span>e-mail: {user.email}</span>
            </div>

        </div>
    )
}


export default App
