import {WindowControls} from "#components/index.js";
import {Search} from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {locations} from "#constants/index.js";
import useLocationStore from "#store/location.js";
import clsx from "clsx";
import useWindowStore from "#store/window.js";

const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => {
        if(item.fileType === "pdf") return openWindow("resume");
        if(item.kind === "folder") return setActiveLocation(item);
        if(['fig', 'url'].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");

        if(['txt', 'img'].includes(item.fileType)) return openWindow("viewer", item);
    };

    const renderList = (name, items) =>(
        <>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}

                        className={clsx(item.id === activeLocation?.id ? "active" : "not-active")}
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="w-4"
                        />

                        <p className="text-sm font-medium truncate">
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );

    return <>
        <div id="window-header">
            <WindowControls target="finder"/>
            <Search className="icon"/>
        </div>

        <div className="bg-white flex h-full">
            <div className="sidebar">
                {renderList("Folders", Object.values(locations))}

                {renderList("Favorites", locations.work.children)}
            </div>

            <ul className="content">
                {activeLocation?.children.map((item) => (
                    <li
                        key={item.id}
                        className={item.position}
                        onClick={() => openItem(item)}
                    >
                        <img src={item.icon} alt={item.name} className="cursor-pointer"/>
                        <p>{item.name}</p>
                    </li>
                )) }
            </ul>
        </div>
    </>
}

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;