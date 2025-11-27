import { NavBar, Welcome, Dock } from "#components/index.js"
import { Draggable } from "gsap/Draggable";
import { Terminal } from "#windows/index.js";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

function App() {
    return (
        <main>
            <NavBar />
            <Welcome />
            <Dock />

            <Terminal />
        </main>
    )
}

export default App
