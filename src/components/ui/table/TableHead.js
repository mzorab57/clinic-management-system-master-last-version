import React from 'react'

const TableHead = ({ thead }) => {
    return (
        <thead className="shadow-sm w-full  text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
            <tr>
                {thead && thead.map((thead, index) => {
                    return (
                        <th key={index} scope="col" className="px-6 py-3">{thead}</th>
                    )
                })}
            </tr>
        </thead>


    )
}

export default TableHead