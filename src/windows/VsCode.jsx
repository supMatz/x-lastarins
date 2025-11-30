import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import {educazioneCivicaSections} from "#constants/index.js";
import {useState} from "react";
import {Moon, Sun, FileCode, Globe, Cpu, Shield} from "lucide-react";

const VsCode = () => {
    const [activeTab, setActiveTab] = useState(educazioneCivicaSections[0].id);
    const [theme, setTheme] = useState("dark"); // "dark" o "light"

    const currentSection = educazioneCivicaSections.find(s => s.id === activeTab);

    const getIcon = (iconName) => {
        const icons = {
            "/icons/globe.svg": <Globe className="w-5 h-5" />,
            "/icons/cpu.svg": <Cpu className="w-5 h-5" />,
            "/icons/shield.svg": <Shield className="w-5 h-5" />,
        };
        return icons[iconName] || <FileCode className="w-5 h-5" />;
    };

    return (
        <>
            <div id="window-header" className={theme === "dark" ? "!bg-[#323233] !border-[#1e1e1e]" : ""}>
                <WindowControls target='vscode'/>
                <h2 className={theme === "dark" ? "!text-gray-300" : ""}>Visual Studio Code</h2>

                {/* Theme Toggle */}
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="ml-auto p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    {theme === "dark" ? (
                        <Sun className="w-4 h-4 text-yellow-400" />
                    ) : (
                        <Moon className="w-4 h-4 text-gray-600" />
                    )}
                </button>
            </div>

            <div className={`flex h-full ${theme === "dark" ? "vscode-dark" : "vscode-light"}`}>
                {/* Sidebar con Tab verticali */}
                <div className="vscode-sidebar">
                    {educazioneCivicaSections.map((section) => (
                        <div
                            key={section.id}
                            onClick={() => setActiveTab(section.id)}
                            className={`vscode-tab ${activeTab === section.id ? "active" : ""}`}
                            title={section.title}
                        >
                            {getIcon(section.icon)}
                        </div>
                    ))}
                </div>

                {/* Content Area - Editor */}
                <div className="vscode-content">
                    {/* Tab bar superiore */}
                    <div className="vscode-tab-bar">
                        <div className="vscode-file-tab">
                            <FileCode className="w-4 h-4" />
                            <span>{currentSection?.title}.md</span>
                        </div>
                    </div>

                    {/* Editor */}
                    <div className="vscode-editor">
                        <pre className="vscode-code">
                            <code>{currentSection?.content}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </>
    )
}

const VsCodeWindow = WindowWrapper(VsCode, 'vscode');
export default VsCodeWindow;