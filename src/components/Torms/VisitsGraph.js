import {BiMenuAltLeft} from "react-icons/bi";

const months = ['jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const VisitsGraph = () => {
    return (
        <>
            <div className="w-[55%] pl-10 pr-4">
                <span
                    className="font-medium uppercase border-b border-black text-sm font-bold w-full flex justify-between">
                    <span className="uppercase"> Total visits </span>
                    <BiMenuAltLeft className="w-6 h-6"/>
                </span>
                <div className="h-full flex flex-col pb-6 pt-4">
                    <div className="flex h-[90%] pl-2">
                        <div className="w-[5%] flex flex-col items-center justify-around px-2">
                            {[0, 1, 2, 3, 4, 5, 6, 7].reverse().map(i => <span
                                className="uppercase text-gray-800 text-xs"> {i * 100}</span>)}
                        </div>
                        <div className="w-[95%] bg-gray-100"></div>
                    </div>
                    <div className="h-[10%] flex justify-around pl-10 py-1.5">
                        {months.map((m, i) => <span className="uppercase text-gray-800 text-xs"> {m}</span>)}
                    </div>
                </div>
            </div>
        </>
    )
};

export default VisitsGraph;