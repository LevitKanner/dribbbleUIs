import TormsSideBar from "../components/Torms/TormsSideBar";
import TormsHeader from "../components/Torms/TormsHeader";
import TormsStatistics from "../components/Torms/TormsStatistics";
import TormTraffic from "../components/Torms/TormTraffic";
import VisitsGraph from "../components/Torms/VisitsGraph";
import TormsGraph from "../components/Torms/TormsGraph";

export const Torms = () => {
    return <div className="flex w-[100%]">
        <TormsSideBar/>
        <div className="w-[92vw]">
            <TormsHeader/>
            <div className="flex space-x-6">
                <div className="w-[55%] pl-6">
                    <TormsStatistics/>
                </div>
                <TormTraffic/>
            </div>
            <div className="flex space-x-6">
                <VisitsGraph/>
                <TormsGraph/>
            </div>
        </div>
    </div>;
}