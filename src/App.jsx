import ItemsView from "./components/ItemsView"
import ListView from "./components/ListView"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <ItemsView></ItemsView>
        <ListView></ListView>
      </div>
    </>
  )
}

export default App
