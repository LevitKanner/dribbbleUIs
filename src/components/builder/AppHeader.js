import React from 'react';
import {BsArrowRight} from "react-icons/bs";

const AppHeader = () => {
    return (
        <>
            <nav className="flex p-4 lg:p-8 items-center justify-between">
                <span className="text-lg font-bold lg:text-2xl"> Builder.Au </span>
                <ul className="space-x-3 font-medium hidden md:flex lg:text-lg">
                    <li> Spaces</li>
                    <li> .</li>
                    <li> By Place</li>
                    <li> .</li>
                    <li> Property</li>
                </ul>

                <div className="flex items-center justify-center space-x-6 lg:text-lg">
                    <span className="font-medium hidden md:block"> List Your Own </span>
                    <button className="inline-flex px-4 py-3 items-center justify-center bg-[#016BFE] text-white font-medium hidden md:block">
                        <span className="flex items-center justify-center">
                            <span>Get Started</span> <BsArrowRight className="ml-4"/>
                        </span>

                    </button>
                </div>
            </nav>
        </>
    )
};

export default AppHeader;