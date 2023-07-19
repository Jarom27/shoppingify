import { useEffect, useState } from "react"
import ListBadge from "./ListBadge"

export default function HistoryView() {
    const [lists,setLists] = useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/shopping-lists/")
            .then(res => res.json())
            .then(res => setLists(res))
    },[])    
    return (
        <main className="bg-contrast flex flex-col container">
            <div className="flex justify-center">
                <div className="px-16">
                    <h1 className="text-3xl font-medium">Shopping List</h1>
                </div>
                
            </div>
            <div className="flex flex-col px-6 gap-x-4 gap-y-4">
                {lists.map((list,pos) => <ListBadge key={pos} list={list}/>)}
            </div>
        </main>
    )
}
