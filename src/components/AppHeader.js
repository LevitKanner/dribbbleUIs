import React from 'react';
import {BsArrowRight} from "react-icons/bs";

const AppHeader = () => {
    return (
        <>
            <nav className="flex p-4 items-center justify-between">
                <span className="text-lg font-bold"> Builder.Au </span>
                <ul className="flex space-x-3 font-medium">
                    <li> Spaces</li>
                    <li> .</li>
                    <li> By Place</li>
                    <li> .</li>
                    <li> Property</li>
                </ul>

                <div className="flex items-center justify-center space-x-6">
                    <span className="font-medium"> List Your Own </span>
                    <button className="inline-flex px-4 py-3 items-center justify-center bg-[#016BFE] text-white font-medium">
                        <span>Get Started</span> <BsArrowRight className="ml-4"/>
                    </button>
                </div>
            </nav>
        </>
    )
};

export default AppHeader;