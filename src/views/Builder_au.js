import AppHeader from "../components/builder/AppHeader";
import Banner from "../components/builder/Banner";
import Note from "../components/builder/Note";

export function Builder_au() {
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
    return <div className="bg-gradient-to-t from-[#97FFFF] to-[#56D3F4] min-h-screen">
        <main className="max-w-7xl mx-auto ">
            <AppHeader/>
            <div className="px-6">
                <Banner/>
                <section className="flex space-x-8 mt-16">
                    {notes.map(note =>
                        <Note city={note.city} number={note.number} text={note.text}
                              key={note.number}/>)}
                </section>
            </div>
        </main>
    </div>;
}