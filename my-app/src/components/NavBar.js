import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="bg-gray-800 px-4 py-3 flex justify-between flex-wrap shadow-md rounded-b-md">
           <h1 className="bg-gradient-to-r from-orange-700 to-red-500 text-transparent bg-clip-text">
                <NavLink to="/">Inventory Managment</NavLink>
            </h1>
            <ul className="flex items-center gap-4 md:gap-4 flex-wrap font-semibold">
                <li className="text-white hover:bg-gradient-to-r hover:bg-gradient-to-r from-orange-700 to-red-500 hover:text-transparent hover:bg-clip-text">
                   <NavLink to="/">Items</NavLink> 
                </li>
                <li className="text-white hover:bg-gradient-to-r hover:bg-gradient-to-r from-orange-700 to-red-500 hover:text-transparent hover:bg-clip-text">
                   <NavLink to="/sales">Sales</NavLink> 
                </li>
                <li className="text-white hover:bg-gradient-to-r hover:bg-gradient-to-r from-orange-700 to-red-500 hover:text-transparent hover:bg-clip-text">
                   <NavLink to="/reports">Reports</NavLink> 
                </li>
            </ul>
        </nav>
    )
}