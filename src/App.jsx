import ItemsView from "./components/ItemsView"
import ListView from "./components/ListView"
import Sidebar from "./components/Sidebar"
import { ListProvider } from "./context/ListContext"


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
