import React from 'react'

export const FormGroup = ({ lblName, txtName, inputTipo, msjError, msjPlaceholder, setDatos, ValidarCampo, datos }) => {
    return (
        <div className="mb-3">
            <label htmlFor={txtName} className="form-label">
                {lblName}
            </label>
            <input
                type={inputTipo}
                className="form-control"
                id={txtName}
                value={datos}
                name={txtName}
                placeholder={msjPlaceholder}
                onChange={(e) => {
                    setDatos({ ...datos, [e.target.name]: e.target.value });
                    ValidarCampo(e.target.value, e.target.name);
                }}
            />
            <p id={`msj__${txtName}`} className="text-warning mt-1 error-activo">
                {msjError}
            </p>
        </div>
    )
}

