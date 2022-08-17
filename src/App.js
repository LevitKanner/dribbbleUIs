import './App.css';
import {Torms} from "./views/Torms";
import {Route, Routes} from "react-router-dom";
import {Builder_au} from "./views/Builder_au";


function App() {
    return (
        <Routes path="/">
            <Route path="torms" element={<Torms/>}/>
            <Route index element={<Builder_au/>}/>
        </Routes>
    );
}

export default App;
