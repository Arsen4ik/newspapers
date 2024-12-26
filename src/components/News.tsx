import { Link } from "@tanstack/react-router";
import { getAllNews } from "../utils/data"

const News = () => {
    const newsList = getAllNews()
    return (
        <div className="flex flex-col gap-6">
            {
                newsList.map(news =>
                    <Link
                        key={news.title}
                        to="/news/$id"
                        params={{ id: String(news.id) }}
                        className="flex flex-row gap-6 pb-6 border-b border-light-gray last-of-type:border-b-0"
                    >
                        <div className="flex flex-col gap-3">
                            <img width={273} height={197} className="w-[273px] h-[197px] min-w-[273px]" src={news.imageUrl} alt="news image" />
                            <div className="flex flex-row items-center justify-between gap-5">
                                <p className="tracking-wider text-xs leading-4">{news.type}</p>
                                <p className="tracking-wider text-[10px] text-gray leading-4">{news.date}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-base font-bold">{news.title}</p>
                            <p className="w-4/5 text-base">{news.description}</p>
                        </div>
                    </Link>
                )
            }
        </div>
    );
}

export default News;