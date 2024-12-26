import { Link } from "@tanstack/react-router";
import { FC } from "react";
import { IDataItem } from "../types/data";

interface IProps {
    link: { to: string, params: { id: string } };
    item: IDataItem;
}

const LinkItem: FC<IProps> = ({ link, item }) => {
    return (
        <Link
            {...link}
            className="w-full flex flex-col gap-3"
        >
            <img src={item.imageUrl} alt="image" />
            <div className="flex flex-row items-center justify-between gap-5">
                <p className="tracking-wider text-xs leading-4">{item.type}</p>
                <p className="tracking-wider text-xs text-gray leading-4">{item.date}</p>
            </div>
            <p className="text-base">{item.title}</p>
        </Link>
    );
}

export default LinkItem;