import { useParams } from '@tanstack/react-router';
import Sidebar from '../components/Sidebar';
import { getNewsById } from '../utils/data';
import NewsInfo from '../components/NewsInfo';

const NewsIDPage = () => {
    const { id } = useParams({ from: "/news/$id" })
    const newsItem = getNewsById(+id)

    return (
        <section className="flex flex-col gap-6 px-7 py-5">
            <p className="text-center text-[34px] font-bold text-gray-secondary">ПЕЧАТЬ</p>
            <div className='flex flex-row gap-12 justify-between w-full'>
                <NewsInfo news={newsItem ?? null} />
                <Sidebar />
            </div>
        </section>
    );
}

export default NewsIDPage;