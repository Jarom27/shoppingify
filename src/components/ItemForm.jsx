import { useEffect, useState } from "react"

export default function ItemForm() {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/categories")
            .then(res => res.json())
            .then(res => setCategories(res))
    },[])    
    return (
        <form className="py-5 px-5 flex flex-col gap-y-5" action="http://127.0.0.1:8000/api/item/add" method="post" onSubmit={(e)=> e.preventDefault()}>
            <h2 className="text-2xl font-medium">Add Item</h2>
            <div className="flex flex-col gap-y-1">
                <label className="text-[14px] font-medium" htmlFor="item-name">Name</label>
                <input type="text" id="item-name" name="name" className="rounded-md border border-2 border-gray-400 px-4 py-3" placeholder="Enter a name" required/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="text-[14px] font-medium" htmlFor="item-note">Note (Optional)</label>
                <textarea name="note" id="item-note" cols="30" rows="5" style={{resize : "none"}} className="rounded-md border border-2 border-gray-400 px-4 py-3" placeholder="Enter a note"></textarea>
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="text-[14px] font-medium" htmlFor="item-image">Image (Optional)</label>
                <input type="text" name="image" className="rounded-md border border-2 border-gray-400 px-4 py-3" placeholder="Enter a URL"/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="text-[14px] font-medium" htmlFor="item-category">Category</label>
                <select name="category" id="item-category" required className="bg-white rounded-md border border-2 border-gray-400 px-4 py-3" placeholder="Enter a category">
                    {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                </select>
            </div>
            <div className="flex">
                <button type="button">Cancel</button>
                <button type="submit" className=" bg-orange-primary px-4 py-3 rounded-lg text-white font-bold">Save</button>
            </div>
            
            
        </form>
    )
}
