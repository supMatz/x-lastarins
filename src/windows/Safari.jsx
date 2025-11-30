import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { areeUmanistiche } from "#constants/index.js";
import {
    ChevronRight,
    ChevronLeft,
    PanelLeft,
    ShieldHalf,
    MoveRight,
    Search,
    Share,
    Copy,
    Plus,
} from "lucide-react";

const Safari = () => {
    return(
        <>
            <div id="window-header">
                <WindowControls target="safari"/>

                <PanelLeft className="ml-10 icon"/>

                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>

                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className="icon" />

                    <div className="search">
                        <Search className="icon" />

                        <input
                            className="flex-1"
                            type="text"
                            placeholder="Cerca o inserisci il nome di un sito"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <Share className="icon" />
                    <Plus className="icon" />
                    <Copy className="icon" />
                </div>
            </div>

            <div className="blog">
                <h2>Area Umanistica</h2>

                <div className="space-y-8">
                    Under Contruction...

                    {/*POI ANDRANNO RI-IMPORTATE LE IMMAGINI NEL PARAMETRO DEL MAP (image)*/}

                    {areeUmanistiche.map(({id, title, date, description}) => (
                        <div key={id} className="blog-post">
                            <div className="col-span-2">
                                {/*<img src={image} alt={title}/> */}
                            </div>

                            <div className="content">
                                <p>{date}</p>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )}
const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
