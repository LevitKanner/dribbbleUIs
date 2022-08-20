import {MdKeyboardArrowDown} from "react-icons/md";

const TeamStatus = () => {
    return (
        <div className="w-[48%] h-full mt-4 rounded p-5 bg-slate-800">
            <div className="flex items-center justify-between text-white">
                <span> Time </span>
                <span className="flex items-center text-sm p-1 rounded border border-white/20"> <span className="px-0.5">This week</span> <MdKeyboardArrowDown/>  </span>
            </div>

        </div>
    )
};

export default TeamStatus;