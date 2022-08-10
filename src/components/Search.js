import {AiFillStar} from "react-icons/ai";

const Search = () => {
    return (
        <>
            <div className="divide-x w-2/5 flex p-1 bg-white mt-16">
                <select className="px-2.5 text-base font-medium block">
                    <option value=""> Buy</option>
                </select>
                <input placeholder="Search For City, Address Or Zip"
                       className="placeholder-gray-500 placeholder-gray-600 px-2.5 block w-full"/>
                <button className="text-white px-7 py-3 bg-black block">Search</button>
            </div>
            <div className="flex space-x-2 mt-16">
                <div
                    className="px-3 py-1 flex items-center justify-center bg-yellow-400 block max-w-fit max-h-fit rounded">
                    <AiFillStar className="w-4 h-4"/>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold"> 5 Stars</span>
                    <span className="text-gray-600 text-sm"> Read Our <span
                        className="text-gray-900 italic font-bold underline"> Success Stories</span></span>
                </div>
            </div>
        </>
    )
};


export default Search;