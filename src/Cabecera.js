import react_icon from './images/react.png'

export const Cabecera = () => {
  return (
    <>
      <div className="col-sm-12 col-lg-3 d-flex justify-content-center">
            <img src={react_icon} alt="react icon" width={250}/>
      </div>
      <div className=" col-sm-12 col-lg-9 px-5 pt-4">
            <h3 className="text-primary">Bienvenido a la app tareas</h3>

            <h5 className="text-secondary">
                        Con esta aplicación podrás consultar, crear, actualizar y eliminar tus tareas.
                  </h5>

                  <hr/>

                  <p className="text-muted">
                        Esta aplicación fue desarrollada con Spring Boot, React y MongoDB.
                  </p>
      </div>
    </>
  )
}
