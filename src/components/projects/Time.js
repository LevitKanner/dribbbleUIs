import {MdKeyboardArrowDown} from "react-icons/md";

const Time = () => {
    return (
        <div className="w-[49%] h-full mt-4 rounded-md p-5 bg-slate-800">
            <div className="flex items-center justify-between text-white">
                <span> Time </span>
                <span className="flex items-center text-sm p-1 rounded border border-white/20">
                    <span className="px-0.5">This week</span>
                    <MdKeyboardArrowDown/>
                </span>
            </div>

        </div>
    )
};

export default Time;