import { Link } from "react-router-dom";

export default function Sidebar() {      
    return (
        <nav className="h-screen w-20 flex flex-col justify-between py-4 items-center">
            <div className="bg-sky-600 w-10 h-10 rounded-full">
            </div>
            <ul className="flex flex-col items-center gap-y-10">
                
                <li><Link to={"/"}><img src="../assets/menu.svg" alt="Image for items" className="h-[26px]"/></Link></li>
                <li><Link to={"/history"}><img src="../assets/history.svg" alt="Image for history" className="h-[26px]"/></Link></li>
                <li><a href=""><img src="../assets/graphs.svg" alt="Image for Graphic" className="h-[26px]"></img></a></li>
            </ul>
            <div className="bg-orange-primary w-10 h-10 rounded-full flex justify-center items-center">
                <img src="../assets/car.svg" alt="Image for shopping car" className="h-[26px] fill-white"/>
            </div>
        </nav>
  )
}
