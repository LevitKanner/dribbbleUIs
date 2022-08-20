import './App.css';
import {Torms} from "./views/Torms";
import {Route, Routes} from "react-router-dom";
import {Builder_au} from "./views/Builder_au";
import Projects from "./views/Projects";


function App() {
    return (
        <Routes path="/">
            <Route path="torms" element={<Torms/>}/>
            <Route index element={<Builder_au/>}/>
            <Route path="projects" element={<Projects/>}/>
        </Routes>
    );
}

export default App;
