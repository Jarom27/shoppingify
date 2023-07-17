import React from 'react'

export default function Item({info}) {
    return (
        <div className='bg-white rounded-lg w-44 py-4 px-4'>
            <h3 className='font-medium capitalize'>{info.name}</h3>
        </div>
    )
}