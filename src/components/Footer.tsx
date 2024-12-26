import { Link } from "@tanstack/react-router";
import TGSVG from "../assets/TG.svg";
import VKSVG from "../assets/VK.svg";
import LogoDarkSVG from "../assets/LogoDark.svg";

const Footer = () => {
    return (
        <footer className="flex flex-row items-center bg-black px-12 py-8">
            <Link to="/" className="w-1/4">
                <LogoDarkSVG />
            </Link>
            <nav className="w-3/4">
                <ul className="flex flex-row justify-between items-center gap-2">
                    <li>
                        <Link className="text-white">Информация об издательстве</Link>
                    </li>
                    <li>
                        <Link className="text-white">контакты</Link>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                        <Link className="text-white">Подписывайтесь на нас в соцсетях:</Link>
                        <TGSVG />
                        <VKSVG />
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;