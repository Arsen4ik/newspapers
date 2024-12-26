import { FC } from "react";
import { IDataItem } from "../types/data";
import data from "../utils/data";
import LinkItem from "./LinkItem";
import linksConfig from "../utils/links";

interface IProps {
    news: IDataItem | null
}

const NewsInfo: FC<IProps> = ({ news }) => {
    if (!news) return <p className="text-[34px] font-bold">Новость не найдена...</p>

    const { interviews, news: newsList } = data
    const items = [[interviews[0], newsList[0], newsList[1]], [interviews[0], newsList[0], newsList[1]]]

    return (
        <div className="flex flex-col gap-6 max-w-full w-4/5">
            <div className="flex flex-col gap-2">
                <p className="text-[34px] font-bold">{news.title}</p>
                <div className="flex flex-row gap-6 items-center">
                    <p className="tracking-wider text-xs leading-4 text-gray-secondary">{news.date}</p>
                    <p className="tracking-wider text-xs leading-4 text-gray-secondary">{news.author}</p>
                </div>
            </div>
            <p className="text-base whitespace-pre-line">{news.text}</p>
            <img width={728} height={487} className="h-[487px]" src={news.imageUrl} alt="news image" />
            <p className="text-base whitespace-pre-line">{news.extraText}</p>
            <div className="flex flex-col gap-1">
                <p className="text-2xl leading-[56px] font-bold">Похожие статьи</p>
                <div className="flex flex-col gap-12">
                    {
                        items.map((row, ind) =>
                            <div key={ind} className="flex flex-row gap-12 pb-12 border-b border-light-gray last-of-type:border-b-0">
                                {
                                    row.map(item => {
                                        const route = linksConfig[item.type]
                                        return <LinkItem
                                            key={item.title}
                                            link={{
                                                to: route ? `/${route}/$id` : "/",
                                                params: { id: String(item.id) }
                                            }}
                                            item={item}
                                        />
                                    }
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default NewsInfo;