import {BiMenuAltLeft} from "react-icons/bi";
import {GoTriangleDown, GoTriangleUp} from "react-icons/go";

const geographies = [
    {
        country: 'United State',
        percentage: '34%',
        visits: '1,933.332',
        up: true
    }, {
        country: 'India',
        percentage: '46%',
        visits: '2,780.780',
        up: true
    }, {
        country: 'Japan',
        percentage: '30%',
        visits: '1,933.332',
        up: false
    }, {
        country: 'Australia',
        percentage: '22%',
        visits: '1,933.332',
        up: false
    }, {
        country: 'Ukraine',
        percentage: '9%',
        visits: '1,933.332',
        up: true
    }, {
        country: 'South Korea',
        percentage: '27%',
        visits: '1,933.332',
        up: true
    },
    {
        country: 'Spain',
        percentage: '41%',
        visits: '1,933.332',
        up: false
    }
]
const GeographyStat = ({country, percentage, visits, up}) => {
    return (
        <>
            <div className="flex w-full space-x-4 items-baseline px-1">
                <div className="w-[30%] text-sm font-medium">{country}</div>
                <div className="w-[40%] flex items-baseline space-x-1">
                    <span className="bg-gray-100 w-[80%] flex items-start">
                        <span className={`w-[${percentage}] bg-green-800 p-1.5`}></span>
                    </span>
                    <span className="text-gray-600 text-sm"> {percentage}</span>
                </div>
                <div className="w-[30%] justify-end flex items-center text-xs">
                    {visits}
                    {up ? <GoTriangleUp className="text-green-400/50 px-0.5"/> :
                        <GoTriangleDown className="text-red-400/50 px-0.5"/>}
                </div>
            </div>
        </>
    )
}
const TormsGraph = () => {
    return (
        <>
            <div>
                <span
                    className="font-medium uppercase border-b border-black text-sm font-bold w-full flex justify-between">
                    <span> Geography </span>
                    <BiMenuAltLeft className="w-6 h-6"/>
                </span>
                <div className="flex justify-between py-1.5 px-1 bg-gray-100 text-gray-500 text-xs font-medium mt-4">
                    <span className="w-[30%]"> Country </span>
                    <span className="w-[40%] text-start px-2"> % from Total </span>
                    <span className="w-[30%] text-end"> Visits </span>
                </div>
                <div className="flex flex-col space-y-3 pt-7">
                    {geographies.map((g, i) =>
                        <GeographyStat key={i} percentage={g.percentage} visits={g.visits} country={g.country} up={g.up}/>)}
                </div>
            </div>
        </>
    )
};

export default TormsGraph;

