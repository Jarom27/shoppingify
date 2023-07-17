import { Link } from "react-router-dom"

export default function Advice() {
    
    return (
        <div className="bg-wine rounded-3xl flex p-4 w-80 py-6 gap-x-4 mx-auto">
            <div className="block relative h-10 w-20">
                <div className="absolute bottom-[-50px] right-2 z-10 w-20 ">
                    <img className="" src="../assets/wine.svg" alt="Bottle of Wine image" />
                </div>
            </div>
            <div className="">
                <p className="text-white font-bold mb-2">Didn’t find what you need?</p>
                <Link to={"/add-item"} className="bg-white rounded-md py-1 px-5 font-bold text-[14px]">Add Item</Link>
            </div>
        </div>
    )
}
