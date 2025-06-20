import React from 'react'

const Modal = ({ children }) => {
    return (
        <div className=' fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
         
            {children}
        </div>
    )
}

export default Modal