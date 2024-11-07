
import { RiChat4Line, RiHome2Line, RiImportLine, RiMenuSearchFill, RiSearchLine, RiTruckLine } from "@remixicon/react"
import logo from "../../public/logo-no-background.png"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>

      <div className="w-1/2 mx-8 py-4">
       <img src={logo} alt="logo-png" />
      </div>  

      <div className="mt-10">
        <ul className="flex flex-col gap-y-5">
          <Link to="">
            <li className="pl-3 px-2 py-3 pt-4 flex gap-x-4"><RiHome2Line /> Dashboard</li>
          </Link>
          <Link to="/search-trucks">
            <li className="pl-3 px-2 py-3 pt-4 flex gap-x-4"><RiSearchLine /> Search</li>
          </Link>
          <li className="cursor-pointer pl-3 px-2 py-3 pt-4 flex gap-x-4"><RiImportLine /> Private Loads</li>
          <li className="cursor-pointer pl-3 px-2 py-3 pt-4 flex gap-x-4"><RiMenuSearchFill /> My Loads</li>
          <li className="cursor-pointer pl-3 px-2 py-3 pt-4 flex gap-x-4"><RiTruckLine /> My Trucks</li>
          <li className="cursor-pointer pl-3 px-2 py-3 pt-4 flex gap-x-4 border-t border-white"><RiChat4Line /> Support</li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar