import { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css'

async function logUser(username, password) {
    const credentials = {
        username: username,
        password: password
    };

    axios.post('http://localhost:4000/auth/login', credentials)
        .then((response) => {
            return response.data;
        })
        .catch((e) => {
            alert('error');
        });

    // return fetch('http://localhost:4000/auth/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    // }).then(res => {
    //     res.json()
    //     alert(res.status);
    //     if(res.ok){
    //         return res.json();
    //     }

    //     throw new Error('Wrong login');
    // }).catch(e => {
    //     alert(e.message);
    //     return null;
    // })
}

function Login({setToken}){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (username, password) => {
        const data = await logUser(username, password);
        if(data){
            setToken(data);
        }
    };

    return (
        <div className='wrapper'>
            <div className="login-container">
                <div className="form-container">
                    <span>Ingresa tu usuario y contraseña</span>
                    <form onSubmit={() => handleSubmit(username, password)}>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <button type='submit'>Iniciar Sesión</button>
                    </form>
                </div>

                <div className="message-container">
                    <div className='message'>
                        <span>¡Bienvenid@!</span>
                        <p>Por favor inicia sesión para acceder al portal web de Bienestar Universitario</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;