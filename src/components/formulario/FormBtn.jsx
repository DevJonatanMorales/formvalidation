import React from 'react'

export const FormBtn = ({ btnText }) => {
    return (
        <button className="text-white btn btn-dark m-auto" type="submit">
            {btnText}
        </button>
    )
}