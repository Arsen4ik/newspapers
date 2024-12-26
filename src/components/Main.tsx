import banner from "../assets/banner.jpg"
import data from "../utils/data"
import linksConfig from "../utils/links"
import LinkItem from "./LinkItem"

const Main = () => {
    const { interviews, news } = data
    const items = [[interviews[0], news[0], news[1]], [interviews[0], news[0], news[1]]]

    return (
        <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-3 w-full">
                <img src={banner} alt="banner" className="w-full object-contian" />
                <p className="text-[38px] font-bold">Упаковка повышается в цене</p>
                <div className="flex flex-row gap-5 items-center">
                    <p className="tracking-wider text-xs leading-4">publish junior</p>
                    <p className="tracking-wider text-xs text-gray leading-4">9 марта 2022 г.</p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-12">
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
    );
}

export default Main;