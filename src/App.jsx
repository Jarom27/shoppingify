import ItemsView from "./components/ItemsView"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <ItemsView></ItemsView>
      </div>
    </>
  )
}

export default App
