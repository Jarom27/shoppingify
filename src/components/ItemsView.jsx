import { useEffect, useState } from "react"
import Item from "./Item"

export default function ItemsView() {
    const [items,setItems] = useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/items")
            .then(res => res.json())
            .then(res => setItems(res))
    },[])    
    return (
        <main className="bg-contrast flex flex-col container items-center">
            <div className="flex justify-center">
                <div>
                    <h1 className="text-3xl">Shoppingfy allows you take your shopping list wherever you go</h1>
                </div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center">
                {items.map(item => <Item key={item.id} info={item}/>)}
            </div>

        </main>
    )
}
