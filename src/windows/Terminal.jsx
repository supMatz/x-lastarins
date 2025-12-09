import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {techStack} from "#constants/index.js";
import {Check, Flag} from "lucide-react";
import { WindowControls } from "#components/index.js";

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack">
                <p>
                    <span className="font-bold">@emmix % </span>
                    cat whos_more.txt
                </p>

                <div className="label">
                    <p className="w-32">Who's more...</p>
                </div>

                <ul className="content">
                    {techStack.map(({category, items}) => (
                        <li key={category}  className="flex items-center">
                            <Check className="check" size={20} />
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check className="check" size={20} />
                        7 of 7 loaded successfully (100%)
                    </p>

                    <p className="text-black">
                        <Flag size={15} fill="black"/>
                        Render time: 4ms
                    </p>
                </div>
            </div>
        </>
    )
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;
