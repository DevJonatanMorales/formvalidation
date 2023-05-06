import { useState } from "react";
import { ShowAlert, Campos, ValidarCampo } from "../functions";
import { FormGroup } from "../components/formulario/FormGroup";
import { FormBtn } from "../components/formulario/FormBtn";

const App = () => {
  const DatosDefault = {
    nombre: "",
    apellido: "",
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
            Campos.nombre === true &&
            Campos.apellido === true &&
            Campos.fecha === true &&
            Campos.telefono === true &&
            Campos.correo === true
          ) {
            setDatos(DatosDefault);
            ShowAlert("Cuenta creada con exito", "success");
          } else {
            ShowAlert(
              "Por favor ingrese los datos que se solicitan",
              "warning"
            );
          }
        }}
      >
        <FormGroup
          txtName="nombre"
          lblName="Nombre:"
          inputTipo="text"
          msjError="El nombre invalido"
          msjPlaceholder="Por favor ingrese su nombre completo"
          setDatos={setDatos}
          datos={Datos.nombre}
          ValidarCampo={ValidarCampo}
        />

        <FormGroup
          txtName="apellido"
          lblName="Apellido:"
          inputTipo="text"
          msjError="El apellido es invalido"
          msjPlaceholder="Por favor ingrese su apellido completo"
          setDatos={setDatos}
          datos={Datos.apellido}
          ValidarCampo={ValidarCampo}
        />

        <FormGroup
          txtName="fecha"
          lblName="Fecha de nacimiento:"
          inputTipo="date"
          msjError="La fecha es invadida"
          msjPlaceholder="Por favor ingrese su fecha de nacimiento"
          setDatos={setDatos}
          datos={Datos.fecha}
          ValidarCampo={ValidarCampo}
        />

        <FormGroup
          txtName="telefono"
          lblName="Telefono:"
          inputTipo="text"
          msjError="El número de telefono es invalido."
          msjPlaceholder="Por favor ingrese su número de telefono."
          setDatos={setDatos}
          datos={Datos.telefono}
          ValidarCampo={ValidarCampo}
        />

        <FormGroup
          txtName="correo"
          lblName="Correo:"
          inputTipo="email"
          msjError="El correo es invalido."
          msjPlaceholder="Por favor ingrese su correo."
          setDatos={setDatos}
          datos={Datos.correo}
          ValidarCampo={ValidarCampo}
        />

        <FormBtn btnText="Crear cuenta" />
      </form>
    </main>
  );
};

export default App;
