import TormsStat from "./TormsStat";

const TormsStatistics = () => {
    const stats = [
        {
            title: "bounce rate",
            growth: "12%",
            percentage: "42.34%"
        }, {
            title: "page per visit",
            growth: "1.3%",
            percentage: "4.20%"
        }, {
            title: "total monthly",
            growth: "3.4%",
            percentage: "326.60K"
        }, {
            title: "avg. visit duration",
            growth: "2.4%",
            percentage: "00:03:27"
        },
    ]
    return (
        <>
            <div className="flex flex-wrap">
                {stats.map((s, i) => <TormsStat title={s.title} growth={s.growth} percentage={s.percentage} key={i}/>)}
            </div>
        </>
    )
};

export default TormsStatistics;