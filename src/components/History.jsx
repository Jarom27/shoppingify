import HistoryView from "./HistoryView";
import ListView from "./ListView";
import Sidebar from "./Sidebar";

export async function getShoppingList(){
    const res = await fetch("http://127.0.0.1:8000/api/shopping-list/active");

    const shopping = await res.json();
    return {shopping};
}
export default function History() {
  return (
    <div className="flex">
        <Sidebar></Sidebar>
        <HistoryView></HistoryView>
        <ListView></ListView>
      </div>
  )
}
