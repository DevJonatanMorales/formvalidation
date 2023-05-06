import React from 'react'

export const FormGroup = ({ txtName, msjError, msjPlaceholder, setDatos, ValidarCampo, datos }) => {
    return (
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
                {txtName}:
            </label>
            <input
                type="text"
                className="form-control"
                id={txtName}
                name={txtName}
                placeholder={msjPlaceholder}
                onChange={(e) => {
                    setDatos({ ...datos, [e.target.name]: e.target.value });
                }}
                onKeyUp={(e) => {
                    ValidarCampo(e.target.value, e.target.name);
                }}
            />
            <p id={`msj__${txtName}`} className="text-warning mt-1 error-activo">
                {msjError}
            </p>
        </div>
    )
}
