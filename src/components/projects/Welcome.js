import React from 'react';
import {IoIosAdd} from "react-icons/io";

const Welcome = () => {
    return (
        <div className="flex justify-between items-center h-[8%]">
            <div className="flex flex-col space-y-1">
                <span className="text-white text-xl"> Welcome <span className="font-bold">Levit!</span></span>
                <span
                    className="text-xs text-white/40">Here is a summary of how your projects have been going so far </span>
            </div>

            <div>
                <button className="p-1.5 rounded border border-white/40 text-white inline-flex items-center">
                    <IoIosAdd className='w-5 h-5 pr-0.5'/>
                    <span className="text-sm">Add new widget</span></button>
            </div>
        </div>
    )
};

export default Welcome;