const TormTraffic = () => {
    return (
        <>
            <div className="w-[45%] pr-8 pt-[23px]">
                <span
                    className="font-medium uppercase border-b border-black text-sm font-bold block"> Traffic source</span>
                <div className="flex w-full h-full pb-10 pt-4">
                    <div className="w-[12%] bg-gray-100 flex flex-col justify-between p-1.5">
                        <span className="text-xs"> Direct </span>
                        <span className="text-end"> 12% </span>
                    </div>
                    <div className="w-[12%] bg-white flex flex-col justify-between p-1.5">
                        <span className="text-xs"> Social </span>
                        <span className="text-end"> 12% </span>
                    </div>
                    <div className="w-[24%] bg-green-500/50 flex flex-col justify-between p-1.5">
                        <span className="text-xs"> Search </span>
                        <span className="text-end"> 24% </span>
                    </div>
                    <div className="w-[52%] bg-black flex flex-col justify-between text-green-500 p-1.5">
                        <span className="text-xs"> Referral </span>
                        <span className="text-end"> 52% </span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TormTraffic;