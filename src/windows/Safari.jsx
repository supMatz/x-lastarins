import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {
    ChevronRight,
    ChevronLeft,
    PanelLeft,
    ShieldHalf,
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
                            placeholder="maps.google.com"
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
                <h2>When you want my doors are wide open ho!</h2>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d726874.6643263723!2d11.138949639186974!3d44.63067809982698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x4786c7282bbf8b69%3A0x8b74838266015607!2sVia%20Privata%20Belgirate%2C%2020%2C%20Milan%2C%20Metropolitan%20City%20of%20Milan!3m2!1d45.495150599999995!2d9.202730899999999!4m3!3m2!1d43.53065!2d13.226412!5e0!3m2!1sit!2sit!4v1765310746226!5m2!1sit!2sit"
                    width="700" height="450" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    )
}
const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
