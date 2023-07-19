import React from 'react'

export default function QuantityTag({item,quantity,setControl}) {
  return (
    <button type="button" className=" border-2 border-orange-primary rounded-3xl px-4 py-1 text-orange-primary text-[12px]" onClick={()=>setControl(true)}>{quantity} pcs</button>
  )
}
