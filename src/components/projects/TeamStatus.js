const members = [
    {name: 'Levit Kanner', position: 'Software Developer', hours: '14:40'},
    {name: 'Harriet Kanner', position: 'Senior', hours: '24:40'},
    {name: 'Eunice Osei-Wusu', position: 'Marketing', hours: '12:40'},
    {name: 'Issah Muniru', position: 'Product Manager', hours: '30:40'},
]
const Member = ({name, position, hours}) => {
    return (
        <div className="flex items-center space-x-2 w-full">
            <span className="w-8 h-8 rounded-full bg-white flex-shrink-0"></span>
            <div className="flex items-start justify-between w-full">
                <div className="flex flex-col">
                    <span className="text-sm"> {name}</span>
                    <span className="text-xs text-white/30"> {position}</span>
                </div>
                <span className="pl-2 text-sm font-bold"> {hours}</span>
            </div>

        </div>
    )
}

const TeamStatus = () => {
    return (
        <div className="w-[49%] h-full mt-4 rounded-md p-5 bg-slate-800 text-white">
            <span> Team Status </span>
            <div className="flex justify-between items-center uppercase text-white/30 text-xs py-3">
                <span>Member</span>
                <span>hours</span>
            </div>
            <div className="flex flex-col space-y-4">
                {
                    members.map((m, i) => <Member key={i} name={m.name} hours={m.hours} position={m.position}/>)
                }
            </div>
        </div>
    )
};

export default TeamStatus;