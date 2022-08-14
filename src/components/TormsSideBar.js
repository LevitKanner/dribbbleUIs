import React from 'react';
import {TbStack} from "react-icons/tb";
import {HiOutlineArrowsExpand} from "react-icons/hi";
import {MdStackedLineChart} from "react-icons/md";
import {VscCircleLargeFilled, VscCircleOutline} from "react-icons/vsc";
import {FiLogOut} from "react-icons/fi";

const TormsSideBar = () => {
    return (
        <>
            <aside className="w-[8vw] bg-black min-h-screen flex flex-col items-center pt-5 pb-14 flex-shrink-0">
                <div className="flex items-baseline text-sm space-x-1 pb-3 border-b border-b-gray-50/20">
                    <div className="w-6 h-6 bg-white rounded"></div>
                    <span className="text-white uppercase font-medium"> Torms </span>
                </div>

                <div className="flex flex-col justify-between flex-1 w-full">
                    <nav className="mt-16">
                        <ul className="text-white flex flex-col items-center space-y-12">
                            <li className="w-full flex justify-center hover:text-green-600 hover:border-l-4 hover:border-green-600 transition-all ease-linear">
                                <TbStack className="w-7 h-10"/>
                            </li>
                            <li className="w-full flex justify-center hover:text-green-600 hover:border-l-4 hover:border-green-600 transition-all ease-linear">
                                <HiOutlineArrowsExpand className="w-7 h-10"/></li>
                            <li className="w-full flex justify-center hover:text-green-600 hover:border-l-4 hover:border-green-600 transition-all ease-linear">
                                <MdStackedLineChart className="w-7 h-10"/></li>
                            <li className="w-full flex justify-center hover:text-green-600 hover:border-l-4 hover:border-green-600 transition-all ease-linear">
                                <MdStackedLineChart className="w-7 h-10"/></li>
                            <li className="flex items-center w-full justify-center hover:text-green-600 hover:border-l-4 hover:border-green-600 transition-all ease-linear">
                                <VscCircleOutline className="w-5 h-10"/> <VscCircleLargeFilled className="w-5 h-10"/></li>
                        </ul>
                    </nav>
                    <div className="w-full flex justify-center">
                        <FiLogOut className=" text-white w-6 h-6"/>
                    </div>
                </div>

            </aside>
        </>
    )
};

export default TormsSideBar;