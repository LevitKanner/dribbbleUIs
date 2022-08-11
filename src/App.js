import './App.css';
import AppHeader from "./components/AppHeader";
import Banner from "./components/Banner";
import Note from "./components/Note";

const notes = [
    {
        number: "01",
        text: "Property in united",
        city: "States"
    },
    {
        number: "02",
        text: "Commercial Space in",
        city: "Canada"
    },
    {
        number: "03",
        text: "Plots in High Tower",
        city: "in LA"
    },
]

function App() {
    return (
        <div className="bg-gradient-to-t from-[#97FFFF] to-[#56D3F4] min-h-screen">
            <main className="max-w-7xl mx-auto ">
                <AppHeader/>
                <div className="px-6 xl:px-8">
                    <Banner/>
                    <section className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0 mt-16 xl:mt-32">
                        {notes.map(note => <Note city={note.city} number={note.number} text={note.text}
                                                 key={note.number}/>)}
                    </section>
                </div>
            </main>
        </div>


    );
}

export default App;
