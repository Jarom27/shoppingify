import React, { useEffect, useState } from 'react'

export default function QuantityControls({item,setControl,quantity,setQuantity}) {
    useEffect(()=>{
        if(quantity < 0){
            setQuantity(0)
        }
    },[quantity]);  
    return (
        <div className='flex items-center rounded-lg bg-white gap-x-2 pr-1'>
            <button className='bg-orange-primary py-3 px-2 rounded-lg'><img src='../assets/trash.svg' className='w-[18px]'></img></button>
            <button className='text-[24px] text-orange-primary' onClick={()=>setQuantity(quantity-1)}>-</button>
            <button className=" border-2 border-orange-primary rounded-3xl px-4 py-1 text-orange-primary text-[12px]" onClick={()=>setControl(false)}>{quantity} pcs</button>
            <button className='text-[24px] text-orange-primary' onClick={()=>setQuantity(quantity+1)}>+</button>
        </div>
    )
}
