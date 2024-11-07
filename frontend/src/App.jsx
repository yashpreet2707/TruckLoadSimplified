import { Outlet } from "react-router"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="flex">

      <div className="w-1/5 h-screen border-r border-white">
        <Sidebar />
      </div>

      <div className="w-4/5 h-screen">
        <Outlet />
      </div>

    </div>
  )
}

export default App