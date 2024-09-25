import { useState } from "react"; 
import PropTypes from "prop-types"; 

const Task = ({ addTask }) => { 
    const [task, setTask] = useState(""); 

    // Se ejecuta cuando el formulario se envía. Si el texto de la tarea no está vacío, agrego la tarea a la lista con la funcion addTask y luego limpio el campo de texto.
    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask(""); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Nueva tarea"
                maxLength={80} 
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

Task.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default Task;
