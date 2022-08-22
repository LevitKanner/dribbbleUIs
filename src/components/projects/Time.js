import {MdKeyboardArrowDown} from "react-icons/md";
import {TbArrowUpRight} from "react-icons/tb";

const Time = () => {
    return (
        <div className="w-[49%] h-full mt-4 rounded-md p-5 bg-[#33313B]">
            <div className="flex items-center justify-between text-white">
                <span className="text-sm block text-white"> Time </span>
                <span className="flex items-center text-sm p-1 rounded border border-white/20">
                    <span className="px-0.5 text-sm">This week</span>
                    <MdKeyboardArrowDown/>
                </span>
            </div>
            <div className="flex items-center space-x-3 pt-4">
                <span className="text-2xl font-bold text-white">68:34</span>
                <div className="flex items-center space-x-2">
                            <span className='p-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-[#78D0BF]/20'>
                            <TbArrowUpRight className="h-4 w-4 stroke-[#78D0BF]"/>
                        </span>
                    <span className="text-[#78D0BF] text-base font-bold"> +15% </span>
                </div>
            </div>
            <span className="text-sm text-white/50 ">Total Hours</span>
        </div>
    )
};

export default Time;