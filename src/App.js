import axios from 'axios';
import { useEffect, useState } from "react";
import { FormularioTareas } from "./FormularioTareas";
import { ListaTareas } from "./ListaTareas";
import { Cabecera } from "./Cabecera";


function App() {

  const [tareas, setTareas] = useState([]);
  const [edit, setEdit] = useState(false);
  const [tarea, setTarea] = useState({
    
  });

  //funciones
  //cargar tareas
  const cargarTareas = () => {
    axios.get('http://localhost:8080/tareas')
      .then(({data}) => setTareas(data));
  }


  useEffect(() => {
    cargarTareas();
  }, []);


  //agregar nueva tarea
  const onSubmit = ( values ) => {

    if(edit){ //editar tarea
      axios.put(`http://localhost:8080/tareas/${tarea.id}`, values)
      .then(() => {
        setTarea();
        setEdit(false);
        cargarTareas();
      });
    }else{ //agregar nueva tarea
      axios.post('http://localhost:8080/tareas', values)
      .then(() => cargarTareas());
    }

   
  }


  //eliminar tarea
  const eliminarTarea = (tarea) => {
    axios.delete(`http://localhost:8080/tareas/${tarea.id}`)
      .then(() => cargarTareas())
  }

  //editar
  const editarTarea = (tarea) => {
    setEdit(true);
    setTarea(tarea);
  }

  return (
    <>
      <div className="container ">
        <div className='row mt-5 mb-3 border rounded p-3 align-items-center'>
          <Cabecera />
        </div>
        <div className="row fila">
          <div className="col-sm-12 col-lg-6 ">
            <ListaTareas tareas={tareas} onDelete={eliminarTarea} onEdit={editarTarea}/>
          </div>

          <div className="col-sm-12 col-lg-6 ">
            <FormularioTareas  onSubmit={onSubmit} editar={edit} tarea={tarea}/>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
