import React from 'react'

const ButtonDelete = ({ deleteRow, onClose }) => {

    return (
        <button
            onClick={(e) => { deleteRow(e); onClose(false); }}
            className='border rounded-md border-red-400 hover:bg-red-400 text-red-400 hover:text-white transition-colors ease-in duration-200  px-8 p-1.5 my-2'>
            Delete
        </button>
    )
}

export default ButtonDelete