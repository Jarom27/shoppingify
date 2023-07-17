import { useContext } from "react"
import ListContext from "../context/ListContext"

export default function Advice() {
    const {setView} = useContext(ListContext)
    function openItemForm(e){
        setView("item-form")
    }
    return (
        <div className="bg-wine rounded-3xl flex p-4 w-80 py-6 gap-x-4 mx-auto">
            <div className="block relative h-10 w-20">
                <div className="absolute bottom-[-50px] right-2 z-10 w-20 ">
                    <img className="" src="../assets/wine.svg" alt="Bottle of Wine image" />
                </div>
            </div>
            <div className="">
                <p className="text-white font-bold mb-2">Didn’t find what you need?</p>
                <button className="bg-white rounded-md py-1 px-5 font-bold text-[14px]" onClick={openItemForm}>Add Item</button>
            </div>
        </div>
    )
}
