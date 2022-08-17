import Search from "./Search";

const Banner = () => {
    return (
        <>
            <section className="flex flex-col items-center md:items-start space-y-3 md:space-y-6 mt-24 xl:mt-32">
                <span className="font-bold text-center text-lg text-gray-800/90 font-semibold md:text-xl"> Verified Properties</span>
                <span className="font-bold text-3xl md:text-5xl xl:text-7xl"> Popular Residential</span>
                <span className="font-bold text-3xl md:text-5xl xl:text-7xl"> Areas in
                    <span className="underline underline-offset-4 mx-3">USA</span>
                </span>
            </section>
            <Search/>
        </>
    )
};

export default Banner;