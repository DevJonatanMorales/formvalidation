import { useState } from "react";
import { ShowAlert } from "./functions";
import "./App.css";

const ValNombre = (value) => {
  let testNombre = /^[a-zA-ZÀ-ÿ]{3,15}$/;
  let msj = "";
  if (!testNombre.test(value)) {
    msj = "Nombre incorrecto";
  }

  return msj;
};

const ValFecha = (value) => {
  let fecha = /^\d{4}-\d{2}-\d{2}$/;
  let msj = "";

  if (!fecha.test(value)) {
    msj = "Fecha incorrecta";
  }

  return msj;
};

const ValDirrecion = (value) => {
  let msj = "";

  if (value.length < 50) {
    msj = "Por favos detalle mas la dirreccion";
  }

  return msj;
};

const App = () => {
  const [PrimerNombre, setPrimerNombre] = useState("");
  const [msjFrisNombre, setMsjFrisNombre] = useState("");

  const [SegundoNombre, setSegundoNombre] = useState("");
  const [msjSegundoNombre, setMsjSegundoNombre] = useState("");

  const [Fecha, setFecha] = useState("");
  const [msjFecha, setMsjFecha] = useState("");

  const [Direccion, setDireccion] = useState("");
  const [msjDirecion, setMsjDireccion] = useState("");

  return (
    <main className="text-white p-3">
      <h3>FORMULARIO DE REGISTRO</h3>
      <form
        className="text-start"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          let testNombre = /^[a-zA-ZÀ-ÿ]{3,15}$/;
          let testFecha = /^\d{4}-\d{2}-\d{2}$/;
          if (
            testNombre.test(PrimerNombre) &&
            testNombre.test(SegundoNombre) &&
            testFecha.test(Fecha) &&
            Direccion.length > 49
          ) {
            ShowAlert("Cuenta creada con exito", "success");
            setPrimerNombre("");
            setSegundoNombre("");
            setFecha("");
            setDireccion("");
          } else {
            ShowAlert(
              "Por favor ingrese los datos que se solicitan",
              "warning"
            );
          }
        }}
      >
        <div className="mb-3">
          <label htmlFor="txtPrimerNombre" className="form-label">
            Primer Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="txtPrimerNombre"
            value={PrimerNombre}
            onChange={(e) => {
              setPrimerNombre(e.target.value);
            }}
            onKeyUp={() => setMsjFrisNombre(ValNombre(PrimerNombre))}
            placeholder="Por favor ingrese su primer nombre"
          />
          <p className="text-warning "> {msjFrisNombre} </p>
        </div>
        <div className="mb-3">
          <label htmlFor="txtSegundoNombre" className="form-label">
            Segundo Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="txtSegundoNombre"
            value={SegundoNombre}
            onChange={(e) => {
              setSegundoNombre(e.target.value);
            }}
            onKeyUp={() => setMsjSegundoNombre(ValNombre(SegundoNombre))}
            placeholder="Por favor ingrese su segundo nombre"
          />
          <p className="text-warning "> {msjSegundoNombre} </p>
        </div>
        <div className="mb-3">
          <label htmlFor="txtFecha" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            className="form-control"
            id="txtFecha"
            value={Fecha}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
            onKeyUp={() => setMsjFecha(ValFecha(Fecha))}
            placeholder="Por favor ingrese su fecha de nacimiento"
          />
          <p className="text-warning "> {msjFecha} </p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Direccion
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            onChange={(e) => {
              setDireccion(e.target.value);
            }}
            onKeyUp={() => setMsjDireccion(ValDirrecion(Direccion))}
            value={Direccion}
          ></textarea>
          <p className="text-warning "> {msjDirecion} </p>
        </div>
        <button className="text-white btn btn-dark m-auto" type="submit">
          Guardar
        </button>
      </form>
    </main>
  );
};

export default App;
