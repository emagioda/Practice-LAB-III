import { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ onRegister }) => {
    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setUsername(value);

        if (value.includes('o') || value.includes('O')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
    };

    const handleRegister = () => {
        if (username === '' || username.includes('o') || username.includes('O')) {
            alert('Usuario inválido para registrarse');
        } else {
            alert('¡Usuario registrado correctamente!');
            if (onRegister) onRegister(username);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={handleChange}
                placeholder="Ingresa tu nombre de usuario"
                className="form-control" 
            />
            <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={handleRegister}
            >
                Registrarse
            </button>
            <p>Nombre de usuario ingresado: {username}</p>
        </div>
    );
};

Login.propTypes = {
    onRegister: PropTypes.func,
};

export default Login;
