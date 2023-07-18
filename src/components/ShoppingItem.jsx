import { useState } from "react"
import QuantityTag from "./QuantityTag"
import QuantityControls from "./QuantityControls"


export default function ShoppingItem({item}) {
    const [control,setControl]=useState(true)  
    return (
        <div className="flex items-center gap-x-4">
            <p className="font-bold capitalize text-[18px]">{item.name}</p>
            {control ? <QuantityControls item={item}/> : <QuantityTag item={item}/>}
        </div>
    )
}
