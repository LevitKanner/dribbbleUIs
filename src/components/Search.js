import {AiFillStar} from "react-icons/ai";

const Search = () => {
    return (
        <>
            <div className="divide-x w-full md:w-4/5 xl:w-3/5 flex p-1 bg-white mt-16 xl:mt-24">
                <select className="px-2.5 lg:px-4 text-xs md:text-base font-medium block">
                    <option value=""> Buy</option>
                </select>
                <input placeholder="Search For City, Address Or Zip"
                       className="placeholder-gray-500 placeholder-gray-600 px-2.5 placeholder:text-xs md:placeholder:text-base xl:pl-4 block w-full"/>
                <button className="text-white px-3 py-2 md:px-7 md:py-3 text-sm md:text-lg xl:py-5 xl:px-9 bg-black block">Search</button>
            </div>
            <div className="flex space-x-2 mt-16 xl:mt-28">
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