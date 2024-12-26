import { Link } from "@tanstack/react-router";
import LogoSVG from "../assets/Logo.svg";
import SearchIcon from "../assets/SearchIcon.svg";

const Header = () => {
    return (
        <section className="flex flex-col">
            <div className="flex flex-row justify-between items-center px-12 py-8 border-b border-light-gray gap-6">
                <Link to="/">
                    <LogoSVG />
                </Link>
                <nav>
                    <ul className="flex flex-row items-center gap-6">
                        <li>
                            <Link to="/" className="text-dark-gray font-bold tracking-wider text-xs">
                                журналы
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-dark-gray font-bold tracking-wider text-xs">
                                подписка
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="px-12 py-8 shadow-md flex flex-row gap-6 justify-between items-center">
                <nav>
                    <ul className="flex flex-row items-center gap-6">
                        <li>
                            <Link to="/" className="text-dark-gray font-bold tracking-wider text-xs">
                                новости
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" className="text-dark-gray font-bold tracking-wider text-xs">
                                печать
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-dark-gray font-bold tracking-wider text-xs">
                                интервью
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-dark-gray font-bold tracking-wider text-xs">
                                материалы
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-dark-gray font-bold tracking-wider text-xs">
                                выставки и мероприятия
                            </Link>
                        </li>
                    </ul>
                </nav>
                <label htmlFor="searh-field" className="relative flex flex-row items-center">
                    <input
                        type="text"
                        id="search-field"
                        className="pl-3 pr-6 py-2 outline-none border-b border-transparent transition-colors duration-300 focus:border-light-gray text-black"
                    />
                    <SearchIcon className="absolute right-0 cursor-pointer" />
                </label>
            </div>
        </section>
    );
}

export default Header;