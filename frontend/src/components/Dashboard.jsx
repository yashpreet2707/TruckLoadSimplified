import { RiSearchLine } from "@remixicon/react"
import { Link } from "react-router-dom"
import "../app.css"


const Dashboard = () => {
  return (
    <div className="h-screen">
      
      <div className="h-20 border-b border-white">
        <h1 className="text-2xl font-extrabold p-5 selection:text-[#2ECC40] selection:bg-white">Dashboard</h1>
      </div>

      <div className="p-5 flex gap-x-4">

        <Link to="/search-trucks">
        <button className="border border-white rounded-full px-5 py-2 flex gap-x-2 hover:bg-gray-400 hover:text-[#2ECC40]"><RiSearchLine />Search Load</button>
        </Link>

        <Link to="">
        <button className="border border-white rounded-full px-5 py-2 flex gap-x-2 hover:bg-gray-400 hover:text-[#2ECC40]"><RiSearchLine />Search Load</button>
        </Link>

        <Link to="">
        <button className="border border-white rounded-full px-5 py-2 flex gap-x-2 hover:bg-gray-400 hover:text-[#2ECC40]"><RiSearchLine />Search Load</button>
        </Link>
      </div>

      <div className="p-5 flex justify-evenly">
        <div className="h-[400px] w-[500px] bg-gray-400 shimmer rounded-lg"></div>
        <div className="h-[400px] w-[500px] bg-gray-400 shimmer rounded-lg"></div>
      </div>
      <div className="p-5 flex justify-evenly">
        <div className="w-[1050px] h-[100px] bg-gray-400 shimmer rounded-lg"></div>
      </div>

    </div>
  )
}

export default Dashboard