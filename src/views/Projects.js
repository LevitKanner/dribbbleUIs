import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectsSideBar from "../components/projects/ProjectsSideBar";
import Welcome from "../components/projects/Welcome";
import ProjectStatusCard from "../components/projects/ProjectStatusCard";
import Time from "../components/projects/Time";
import TeamStatus from "../components/projects/TeamStatus";
import Calender from "../components/projects/Calender";

const Projects = () => {
    return (
        <main className="bg-slate-900 flex">
            <ProjectsSideBar/>
            <div className="w-full">
                <ProjectsHeader/>
                <div className="w-full h-[90vh] flex items-center justify-center">
                    <div className="w-[75%] h-[80%] m-auto">
                        <Welcome/>
                        <div className="mt-6 w-full h-full h-[90%] flex">
                            <div className="w-[60%]">
                                <ProjectStatusCard/>
                                <div className="h-[57%] w-full  flex space-x-4">
                                    <Time/>
                                    <TeamStatus/>
                                </div>
                            </div>
                            <Calender/>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
};

export default Projects;