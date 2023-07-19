import { Link } from "react-router-dom";

export default function ListBadge({list}) {
  return (
    <div className="bg-white flex justify-between px-6 py-6 shadow-sm rounded-lg">
        <div><h2 className="font-bold text-xl">{list.name}</h2></div>
        <div className="flex items-center justify-end gap-x-3">
            <img className="h-[24px]" src="../assets/calendar.svg"></img>
            <p className="font-medium text-gray-400">{list.creation_date}</p>
            {list.state == "Completed" ? <span className="border-2 border-sky-400 text-sky-400 font-medium rounded-xl px-2">{list.state}</span> : ""}
            {list.state == "Cancelled" ? <span className="border-2 border-red-500 text-red-500 font-medium rounded-xl px-2">{list.state}</span> : ""}
            <Link><img src="../assets/right.svg" className="h-[20px]"></img></Link>
        </div>
    </div>
  )
}
