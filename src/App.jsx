import ItemsView from "./components/ItemsView"
import ListView from "./components/ListView"
import Sidebar from "./components/Sidebar"
import { ListProvider } from "./context/ListContext"

export async function getShoppingList(){
    const res = await fetch("http://127.0.0.1:8000/api/shopping-list/active");

    const shopping = await res.json();
    return {shopping};
}
export async function getItemInfo({params}){
    const res = await fetch("http://127.0.0.1:8000/api/items/"+params.id);

    const item = await res.json();

    return {item};
}
function App() {

  return (
    <>
      <div className="flex">
          <ListProvider>
            <Sidebar></Sidebar>
            <ItemsView></ItemsView>
            <ListView></ListView>
          </ListProvider>
      </div>
    </>
  )
}

export default App
