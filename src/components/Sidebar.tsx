import sidebarImage from "../assets/sidebarImage.jpg"

const Sidebar = () => {
    return (
        <div className="max-w-[350px] w-full flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <p className="text-[32px] font-bold">Новый номер</p>
                <div className="flex flex-row gap-5">
                    <img src={sidebarImage} alt="sidebar image" />
                    <p className="text-base">Тема номера: Мир ламинаторов.
                        Послепечать на конвейере. УФ-принтер на «троих». DTF-комплекс Yinstar. Художественное конструирование в СССР. </p>
                </div>
                <div className="flex flex-row gap-5 justify-between items-center">
                    <p className="text-base">
                        Выпуск #12/24
                    </p>
                    <button className="bg-red border-none rounded-sm px-5 py-2 text-white text-xs font-bold tracking-wider">Купить</button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;