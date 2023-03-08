import React, { useEffect, useState } from "react";

export const FormularioTareas = ({ onSubmit, editar, tarea }) => {
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState(false);

  //objeto editar
  useEffect(() => {
    if (editar) {
      setInputValue(tarea.nombre);
      setChecked(tarea.completada);
    }
  }, [editar, tarea]);

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onCheckbox = () => {
    setChecked(!checked);
  };

  const _onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 0)
      return console.error("no has escrito nada");

    const values = {
      nombre: inputValue,
      completada: checked,
    };

    onSubmit({ ...values });

    setInputValue("");
    setChecked(false);

    e.target.reset();
  };

  return (
    <>
      <h3 className="mb-3">{editar ? "Editar" : "Nueva"} Tarea</h3>
      <form onSubmit={_onSubmit}>
        <div className="mb-3">
          <label className="fw-bold">Nombre</label>
          <input
            className="form-control"
            type="text"
            placeholder="Agrega una nueva tarea"
            value={inputValue}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            id="check"
            type="checkbox"
            name="completado"
            onChange={onCheckbox}
            checked={checked}
          />
          <label className="ms-2 text-muted">Completado</label>
        </div>

        <div className="text-end">
          <button className="btn btn-primary btn-block" type="submit">
            {editar ? "Editar" : "Agregar"}
          </button>
        </div>
      </form>
    </>
  );
};
