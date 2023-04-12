import { useState } from "react";
import { ShowAlert, Campos, ValidarCampo } from "./functions";
import "./App.css";

const App = () => {
  const DatosDefault = {
    nombres: "",
    apellidos: "",
    fecha: "",
    telefono: "",
    correo: "",
  };
  const [Datos, setDatos] = useState(DatosDefault);

  return (
    <main className="text-white p-3">
      <h3>FORMULARIO DE REGISTRO</h3>
      <form
        className="text-start"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          if (
            Campos.nombres === true &&
            Campos.apellidos === true &&
            Campos.fecha === true &&
            Campos.telefono === true &&
            Campos.correo === true
          ) {
            ShowAlert("Cuenta creada con exito", "success");
            setDatos(DatosDefault);
          } else {
            ShowAlert(
              "Por favor ingrese los datos que se solicitan",
              "warning"
            );
          }
        }}
      >
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombres"
            name="nombres"
            value={Datos.nombres}
            onChange={(e) => {
              setDatos({ ...Datos, [e.target.name]: e.target.value });
            }}
            onKeyUp={(e) => {
              ValidarCampo(e.target.value, e.target.name);
            }}
            placeholder="Por favor ingrese su nombre completo"
          />
          <p id="msj__nombres" className="text-warning mt-1 error-activo">
            El nombre invalido
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">
            Apellido:
          </label>
          <input
            type="text"
            className="form-control"
            id="apellidos"
            name="apellidos"
            value={Datos.apellidos}
            onChange={(e) => {
              setDatos({ ...Datos, [e.target.name]: e.target.value });
            }}
            onKeyUp={(e) => {
              ValidarCampo(e.target.value, e.target.name);
            }}
            placeholder="Por favor ingrese su apellidos completo."
          />
          <p id="msj__apellidos" className="text-warning mt-1 error-activo">
            El apellido es invalido{" "}
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">
            Fecha de nacimiento:
          </label>
          <input
            type="date"
            className="form-control"
            id="fecha"
            name="fecha"
            value={Datos.fecha}
            onChange={(e) => {
              setDatos({ ...Datos, [e.target.name]: e.target.value });
            }}
            onKeyUp={(e) => {
              ValidarCampo(e.target.value, e.target.name);
            }}
            placeholder="Por favor ingrese su fecha de nacimiento"
          />
          <p id="msj__fecha" className="text-warning mt-1 error-activo">
            La fecha es Invadida.
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Telefono:
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={Datos.telefono}
            onChange={(e) => {
              setDatos({ ...Datos, [e.target.name]: e.target.value });
            }}
            onKeyUp={(e) => {
              ValidarCampo(e.target.value, e.target.name);
            }}
            placeholder="Por favor ingrese su número de telefono."
          />
          <p id="msj__telefono" className="text-warning mt-1 error-activo">
            El número de telefono es invalido.
          </p>
        </div>

        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo:
          </label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={Datos.correo}
            onChange={(e) => {
              setDatos({ ...Datos, [e.target.name]: e.target.value });
            }}
            onKeyUp={(e) => {
              ValidarCampo(e.target.value, e.target.name);
            }}
            placeholder="Por favor ingrese su correo."
          />
          <p id="msj__correo" className="text-warning mt-1 error-activo">
            El correo es invalido.
          </p>
        </div>

        <button className="text-white btn btn-dark m-auto" type="submit">
          Guardar
        </button>
      </form>
    </main>
  );
};

export default App;
