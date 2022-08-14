import {BiSearchAlt2} from "react-icons/bi";
import {BsBell} from "react-icons/bs";

const TormsHeader = () => {
    return (
        <>
            <div className="px-10 pt-3 bg-gray-100 flex-shrink-0 w-[92vw] h-[11vh]">
                <div className="flex justify-between items-center">
                    <span className="self-end font-bold"> Dashboard</span>
                    <div
                        className="flex space-x-6 items-center w-[45%] justify-end border-b border-black py-1.5">
                        <BiSearchAlt2 className="w-4 h-4"/>
                        <BsBell className="w-4 h-4"/>
                        <div className="w-4 h-4 bg-gray-300"></div>
                    </div>
                </div>
                <nav className="mt-3">
                    <ul className="flex space-x-6 items-center text-sm">
                        <li className="py-2 text-gray-400 hover:text-black hover:border-b-2 hover:border-black hover:font-bold transition-all ease-linear"> Summary</li>
                        <li className="py-2 text-gray-400 hover:text-black hover:border-b-2 hover:border-black hover:font-bold transition-all ease-linear"> Statistics</li>
                        <li className="py-2 text-gray-400 hover:text-black hover:border-b-2 hover:border-black hover:font-bold transition-all ease-linear"> Overview</li>
                        <li className="py-2 text-gray-400 hover:text-black hover:border-b-2 hover:border-black hover:font-bold transition-all ease-linear"> Account</li>
                    </ul>
                </nav>
                <div>

                </div>
            </div>
        </>
    )
};

export default TormsHeader;