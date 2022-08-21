import {BsSpeedometer} from "react-icons/bs";
import {FiCalendar} from "react-icons/fi";
import {RiInboxLine, RiPieChart2Line} from "react-icons/ri";
import {MdOutlineFolderOpen} from "react-icons/md";
import {TbSettings} from "react-icons/tb";

const ProjectsSideBar = () => {
    return (
        <aside
            className="w-[7%] h-[100vh] bg-gray-800 border-r border-r-gray-700 flex flex-col justify-between items-center py-6">
            <span className="w-10 h-10 rounded-full bg-indigo-900"></span>
            <nav className="w-full">
                <ul className="flex flex-col items-center space-y-4 w-full">
                    <li className="group w-full flex justify-center py-4 hover:border-r-4 hover:border-indigo-600 hover:bg-indigo-600/20 transition-all ease-linear">
                        <BsSpeedometer className="w-5 h-5 text-white/40 group-hover:text-white"/>
                    </li>
                    <li className="group w-full flex justify-center py-4  hover:border-r-4 hover:border-indigo-600 hover:bg-indigo-600/20  transition-all ease-linear">
                        <MdOutlineFolderOpen className="w-5 h-5 text-white/40 group-hover:text-white"/>
                    </li>
                    <li className="group w-full flex justify-center py-4  hover:border-r-4 hover:border-indigo-600 hover:bg-indigo-600/20  transition-all ease-linear">
                        <FiCalendar className="w-5 h-5 text-white/40 group-hover:text-white"/>
                    </li>
                    <li className="group w-full flex justify-center py-4  hover:border-r-4 hover:border-indigo-600 hover:bg-indigo-600/20  transition-all ease-linear">
                        <RiInboxLine className="w-5 h-5 text-white/40 group-hover:text-white"/>
                    </li>
                    <li className="group w-full flex justify-center py-4  hover:border-r-4 hover:border-indigo-600 hover:bg-indigo-600/20  transition-all ease-linear">
                        <RiPieChart2Line className="w-5 h-5 text-white/40 group-hover:text-white"/>
                    </li>
                </ul>
            </nav>
            <span> <TbSettings className="w-5 h-5 text-white/40"/> </span>
        </aside>
    )
};

export default ProjectsSideBar;