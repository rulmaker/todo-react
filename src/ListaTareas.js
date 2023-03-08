import { FaCheckCircle, FaClock, FaEdit, FaTrash } from "react-icons/fa";

export const ListaTareas = ({ tareas, onDelete, onEdit }) => {
  return (
    <>
      <h3 className="mb-3">Lista de tareas</h3>

      {tareas.map((tarea) => (
        <div className="mb-3 border rounded p-3" key={tarea.id}>
          <div className="d-flex justify-content-between mb-1">
            <div className="fw-bold">{tarea.nombre}</div>

            <div className="text-muted small">
              <FaEdit className="icon" onClick={() => onEdit(tarea)} />
              <FaTrash className="icon ms-2" onClick={() => onDelete(tarea)} />
            </div>
          </div>

          <div>
            {tarea.completada ? (
              <div className="text-success small">
                <FaCheckCircle /> Completado
              </div>
            ) : (
              <div className="text-secondary small">
                <FaClock /> Pendiente
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListaTareas;
