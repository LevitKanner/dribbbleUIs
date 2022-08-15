import {AiFillCaretDown} from "react-icons/ai";
import {BsArrowUpRight} from "react-icons/bs";

const TormsStat = ({title, growth, percentage}) => {
    return (
        <>
            <div className="flex flex-col items-start w-[50%] py-6 px-4">
                <span className="font-medium uppercase border-b border-black text-sm font-bold w-full"> {title}</span>
                <span className="flex items-center justify-center text-xs py-4 text-gray-600">
                    <AiFillCaretDown className="text-red-500 px-0.5"/>{growth}</span>
                <div className="flex justify-between items-baseline w-full">
                    <span className="text-4xl font-semibold"> {percentage}</span>
                    <BsArrowUpRight className="text-xl "/>
                </div>

            </div>
        </>
    )
};

export default TormsStat;