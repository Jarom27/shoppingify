import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ShoppingItem from './ShoppingItem'

export default function ShoppingList() {
    const {shopping} = useLoaderData()
    
    return (
      <div className='flex flex-col px-[60px]'>
          <h2 className='text-2xl font-bold'>{shopping.name}</h2>
          <ul>
            {shopping.items.map((item,pos) =><li key={pos}><ShoppingItem item={item}/></li>)}
          </ul>
      </div>
    )
}
