import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import useWindowStore from "#store/window.js";

const File = () => {
    const { windows } = useWindowStore();
    const data = windows.viewer?.data;

    if(!data) return null;

    const { name, imageUrl, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="viewer" />
                <h2 className="ml-3">{name}</h2>
            </div>

            <div className="p-5 space-y-6 bg-white rounded-b-lg overflow-hidden">
                {imageUrl && (
                    <div className="w-full">
                        <img src={imageUrl} alt={name} className="w-full h-auto rounded" />
                    </div>
                )}

                {Array.isArray(description) && description.length > 0 && (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

const FileWindow = WindowWrapper(File, "viewer");
export default FileWindow;