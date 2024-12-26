import { Link } from "@tanstack/react-router";
import Sidebar from "../components/Sidebar";
import News from "../components/News";

const NewsPage = () => {
    return (
        <section className="flex flex-col gap-6 pl-10 pr-7 py-5">
            <div className="flex flex-col gap-8 pb-6 w-2/3 mx-auto border-b border-light-gray">
                <p className="text-center text-[34px] font-bold">ПЕЧАТЬ</p>
                <div className="flex flex-row w-1/2 justify-between mx-auto">
                    <Link className="font-medium text-xs">ДОПЕЧАТЬ</Link>
                    <Link className="font-medium text-xs">ПЕЧАТЬ</Link>
                    <Link className="font-medium text-xs">ПОСЛЕПЕЧАТЬ</Link>
                </div>
            </div>
            <div className="flex flex-row gap-12 justify-between">
                <News />
                <Sidebar />
            </div>
        </section>
    );
}

export default NewsPage;