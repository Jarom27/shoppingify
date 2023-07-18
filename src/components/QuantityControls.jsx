import React from 'react'

export default function QuantityControls({item}) {
  return (
    <div className='flex items-center rounded-lg bg-white gap-x-2 pr-1'>
        <button className='bg-orange-primary py-3 px-2 rounded-lg'><img src='../assets/trash.svg' className='w-[18px]'></img></button>
        <button className='text-[24px] text-orange-primary'>-</button>
        <p className=" border-2 border-orange-primary rounded-3xl px-4 py-1 text-orange-primary text-[12px]">{item.pivot.quantity} pcs</p>
        <button className='text-[24px] text-orange-primary'>+</button>
    </div>
  )
}
