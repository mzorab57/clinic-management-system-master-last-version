import React from 'react'

const DetailImage = ({ file, setFile }) => {

    const onchangeimg = (e) => {
        setFile(e);
    }
    return (
        <div className='grid'>
            {Array.from(file).map((item, index) => {
                return (
                    <div key={index}>
                        <img className='w-72 flex' src={file ? URL.createObjectURL(item) : null} alt='img' />
                    </div>
                )
            })}
            <div className='flex justify-between items-center mt-6 mb-3'>
                <input
                    multiple
                    type='file'
                    onChange={onchangeimg}
                    className={` ${file ? 'bg-sky-100' : 'bg-slate-50'} w-full  text-sm focus:ring-1 focus:ring-sky-500 pl-2 focus:outline-none border border-gray-300 p-2 rounded shadow-sm shadow-black/10 `} />
            </div>
        </div>
    )
}

export default DetailImage