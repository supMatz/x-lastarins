import { NavBar, Welcome, Dock } from "#components/index.js"
import { Draggable } from "gsap/Draggable";
import {Safari, Terminal, Resume, Finder, Text, Contact} from "#windows/index.js";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

function App() {
    return (
        <main>
            <NavBar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <Contact />
        </main>
    )
}

export default App;