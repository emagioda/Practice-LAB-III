import PropTypes from "prop-types";

// Por cada tarea muestro su texto, aplicando la clase `completed` si está completada y también incluyo botones para marcar la tarea como completada o para eliminarla.
const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}> 
          <span className={task.completed ? "completed" : ""}>{task.text}</span>
          <div className="task-buttons"> 
            <button onClick={() => toggleTaskCompletion(task.id)}>Completado</button> 
            <button onClick={() => deleteTask(task.id)}>Eliminar</button> 
          </div>
        </li>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
