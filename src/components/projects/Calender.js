import {FiSun} from "react-icons/fi";

const Calender = () => {
    return (
        <div className="w-[38%] h-full ml-4 rounded-md p-5 bg-[#33313B] text-white">
            <span className="text-sm block text-white"> Calender </span>
            <div className="flex items-center justify-between mt-7">
                <span className="flex items-center text-white/50"><FiSun className="text-yellow-500 pr-1 w-5 h-5"/> Today</span>
                <span>15 April 2021</span>
            </div>

            <div className='flex flex-col justify-around h-[80%] mt-5'>
                <div className="flex space-x-3 items-center">
                    <span className='text-white/50 text-sm w-11 text-start'> 8 AM </span>
                    <div className='h-[1px] bg-white/30 flex-grow'></div>
                </div>
                <div className="flex space-x-3 items-center">
                    <span className='text-white/50 text-sm w-11 text-start'> 9 AM </span>
                    <div className='h-[1px] bg-white/30 flex-grow relative'>
                        <div className="bg-[#78D0BF] w-full h-20 rounded p-3">
                            <span className="text-black font-bold text-sm"> Online Courses Page</span>
                            <div className='flex w-full justify-between items-center py-1 h-10'>
                                <span className="text-black/60 text-xs"> Meeting </span>
                                <div className=' flex'>
                                    <div className="w-6 h-6 rounded-full bg-gray-100"></div>
                                    <div className="w-6 h-6 rounded-full bg-slate-300 -ml-2.5"></div>
                                    <div
                                        className="w-6 h-6 rounded-full bg-gray-400 -ml-2.5 flex justify-center items-center text-[8px] text-black"> +3
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-3 items-center">
                    <span className='text-white/50 text-sm w-11 text-start'> 10 AM </span>
                    <div className='h-[1px] bg-white/30 flex-grow'></div>
                </div>
                <div className="flex space-x-3 items-center">
                    <span className='text-white/50 text-sm w-11 text-start'> 11 AM </span>
                    <div className='h-[1px] bg-white/30 flex-grow'></div>
                </div>
                <div className="flex space-x-3 items-center">
                    <span className='text-white/50 text-sm w-11 text-start'> 12 AM </span>
                    <div className='h-[1px] bg-white/30 flex-grow'></div>
                </div>
                <div className="flex space-x-3 items-center">
                    <span className='text-white/50 text-sm w-11 text-start'> 1 PM </span>
                    <div className='h-[1px] bg-white/30 flex-grow relative'>
                        <div className="absolute bg-[#694CEB] w-full h-20 rounded -mt-6 p-3">
                            <span className="text-white font-bold text-sm"> Smart Home App</span>
                            <div className='flex w-full justify-between items-center py-1 h-10'>
                                <span className="text-white/60 text-xs"> Meeting </span>
                                <div className=' flex'>
                                    <div className="w-6 h-6 rounded-full bg-gray-100"></div>
                                    <div className="w-6 h-6 rounded-full bg-slate-300 -ml-2.5"></div>
                                    <div
                                        className="w-6 h-6 rounded-full bg-gray-400 -ml-2.5 flex justify-center items-center text-[8px] text-black"> +2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-3 items-center">
                    <span className='text-white/50 text-sm w-11 text-start'> 2 PM </span>
                    <div className='h-[1px] bg-white/30 flex-grow'></div>
                </div>
                <div className="flex space-x-3 items-center">
                    <span className='text-white/50 text-sm w-11 text-start'> 3 PM </span>
                    <div className='h-[1px] bg-white/30 flex-grow'></div>
                </div>
            </div>
        </div>
    )
};

export default Calender;