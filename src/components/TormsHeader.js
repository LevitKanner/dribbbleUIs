import {BiSearchAlt2} from "react-icons/bi";
import {BsBell} from "react-icons/bs";

const TormsHeader = (props) => {
    return (
        <>
            <div className="px-10 pt-3 bg-gray-100">
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
                        <li className="py-2 border-b-2 border-black font-bold"> Summary</li>
                        <li className="py-2 text-gray-400"> Statistics</li>
                        <li className="py-2 text-gray-400"> Overview</li>
                        <li className="py-2 text-gray-400"> Account</li>
                    </ul>
                </nav>
                <div>

                </div>
            </div>
        </>
    )
};

export default TormsHeader;