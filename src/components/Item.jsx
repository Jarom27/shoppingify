import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Item({info}) {
    
    return (
        <Link to={"details/"+info.id} className='bg-white rounded-lg w-44 py-4 px-4 flex justify-between'>
            <h3 className='font-medium capitalize'>{info.name}</h3>
            <button className='bg-white'>+</button>
        </Link>
    )
}
