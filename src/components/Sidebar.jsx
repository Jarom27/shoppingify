export default function Sidebar() {      
    return (
        <nav className="h-screen w-20 flex flex-col justify-between">
            <div className="bg-sky-600 w-10 h-10 rounded-full">
            </div>
            <ul>
                <li><a href=""><img src="../assets/menu.svg" alt="Image for items" /></a></li>
                <li><a href=""><img src="../assets/history.svg" alt="Image for history" /></a></li>
                <li><a href=""><img src="../assets/graphs.svg" alt="Image for Graphic"></img></a></li>
            </ul>
            <div className="bg-orange-primary w-10 h-10 rounded-full">
                <img src="../assets/car.svg" alt="Image for shopping car" />
            </div>
        </nav>
  )
}
