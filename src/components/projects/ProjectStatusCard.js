import {TbArrowUpRight} from "react-icons/tb";

const legends = [
    {title: 'completed', figure: 10, color: 'indigo'},
    {title: 'In progress', figure: 4, color: 'amber'},
    {title: 'Yet to start', figure: 2, color: 'red'},
]
const Legend = ({title, figure, color}) => {
    return (
        <div className="flex space-x-2 items-center text-sm">
            <span className={`w-4 h-1.5 bg-${color}-600/50 `}></span>
            <span className="text-white/50"> {title}</span>
            <span className="pl-2 font-medium">{figure}</span>
        </div>
    )
}
const ProjectStatusCard = () => {
    return (
        <div className="text-white w-full h-[40%] bg-slate-800 p-5 rounded-md">
            <span className="text-sm block">Project Status</span>
            <div className="w-full py-5">
                <div className="flex divide-x divide-white/20 h-full">
                    <div className="w-[30%] flex flex-col justify-center">
                        <span className="text-7xl"> 16 </span>
                        <span className="text-white/60 text-sm"> Total Projects</span>
                        <div className="flex items-center space-x-2 mt-4">
                            <span
                                className='p-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-400/20'>
                            <TbArrowUpRight className="h-4 w-4 stroke-emerald-400"/>
                        </span>
                            <span className="text-emerald-400 text-sm"> +1 New </span>
                        </div>

                    </div>

                    <div className="w-[70%] flex space-x-8 items-center justify-end">
                        <div className='w-32 h-32 rounded-full bg-sky-500'></div>
                        <div>
                            {legends.map((l, i) =>
                                <Legend key={i} title={l.title} figure={l.figure} color={l.color}/>)}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectStatusCard;