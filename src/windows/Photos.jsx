import { Mail, Search} from "lucide-react";
import {useState} from "react";

import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import { gallery } from "#constants/index.js";
import useWindowStore from "#store/window.js";
import {photosTabsContent} from "#constants/index.js";

const Photos = () => {
    const { openWindow } = useWindowStore();
    const [activeTab, setActiveTab] = useState("gallery"); // "gallery" o "experience"

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos"/>

                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon"/>
                    <Search className="icon"/>
                </div>
            </div>

            <div className="flex w-full h-full">
                <div className="sidebar">
                    <h2>APRA</h2>
                    <ul>
                        <li
                            className={activeTab === "gallery" ? "active" : ""}
                            onClick={() => setActiveTab("gallery")}
                        >
                            <img src="/icons/gicon1.svg" alt="Galleria" />
                            <p>Galleria</p>
                        </li>
                        <li
                            className={activeTab === "experience" ? "active" : ""}
                            onClick={() => setActiveTab("experience")}
                        >
                            <img src="/icons/file.svg" alt="Esperienza" />
                            <p>Conclusioni</p>
                        </li>
                    </ul>
                </div>

                {/* GALLERIA */}
                {activeTab === "gallery" && (
                    <div className="gallery select-none">
                        <ul>
                            {gallery.map(({id, img}) => (
                                <li
                                    key={id}
                                    onClick={() =>
                                        openWindow("viewer", {
                                            id,
                                            name: "Immagine della Galleria",
                                            icon: "/images/image.png",
                                            kind: "file",
                                            fileType: "img",
                                            imageUrl: img,
                                        })}
                                >
                                    <img src={img} alt={`Immagine - ${id}`} draggable={false} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* ESPERIENZA */}
                {activeTab === "experience" && (
                    <div className="experience-content p-8 overflow-y-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">La mia esperienza in APRA</h2>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            {photosTabsContent.map(({content, id}) => (
                                <p
                                    key={id}
                                    className="whitespace-pre-line"
                                >
                                    {content}
                                </p>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;