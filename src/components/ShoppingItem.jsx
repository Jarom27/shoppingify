import { useEffect, useState } from "react"
import QuantityTag from "./QuantityTag"
import QuantityControls from "./QuantityControls"


export default function ShoppingItem({item}) {
    const [control,setControl]=useState(false);
    const [quantity,setQuantity] = useState(item.pivot.quantity); 
    useEffect(()=>{
        const data = {"quantity" : quantity}
        fetch("http://127.0.0.1:8000/api/shopping-list/active/items/"+item.id,{
            method : "put",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },[quantity]) 
    return (
        <div className="flex items-center gap-x-4">
            <p className="font-bold capitalize text-[18px]">{item.name}</p>
            {control ? <QuantityControls item={item} setControl={setControl} quantity={quantity} setQuantity={setQuantity}/> : <QuantityTag item={item} quantity = {quantity} setControl={setControl}/>}
        </div>
    )
}
