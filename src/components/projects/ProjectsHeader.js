import {MdKeyboardArrowDown} from "react-icons/md";


const ProjectsHeader = () => {
    return (
        <div className="flex justify-between items-center p-8 w-full h-[10vh]">
            <span className="text-white font-bold"> Dashboards / <span className="font-medium text-gray-400">Projects</span></span>
            <div className="flex items-center text-white space-x-1.5">
                <span className="w-6 h-6 rounded-full bg-white"> </span>
                <span className="font-medium text-sm">Levit Kanner </span>
                <MdKeyboardArrowDown/>
            </div>
        </div>
    )
};

export default ProjectsHeader;