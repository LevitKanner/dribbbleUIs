import Search from "./Search";

const Banner = () => {
    return (
        <>
            <section className="flex flex-col items-start space-y-6 mt-24">
                <span className="font-bold text-gray-800/90 font-semibold"> Verified Properties</span>
                <span className="font-bold text-5xl"> Popular Residential</span>
                <span className="font-bold text-5xl"> Areas in
                    <span className="underline underline-offset-4 mx-3">USA</span>
                </span>
            </section>
            <Search/>
        </>
    )
};

export default Banner;