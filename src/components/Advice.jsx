export default function Advice() {
  return (
    <div className="bg-wine rounded-md flex p-4 w-80 py-6 gap-x-4">
        <div className="block relative h-10 w-20">
            <div className="absolute bottom-[-50px] right-2 z-10 w-20 ">
                <img className="" src="../assets/wine.svg" alt="Bottle of Wine image" />
            </div>
        </div>
        <div className="">
            <p className="text-white">Didn’t find what you need?</p>
            <button className="bg-white rounded-md py-1 px-5 font-bold text-[14px]">Add Item</button>
        </div>
    </div>
  )
}
