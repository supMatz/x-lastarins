import {NavBar, Welcome, Dock, Home} from "#components/index.js"
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import {
    Safari,
    Terminal,
    Finder,
    File,
    Contact,
    VsCode,
    Calendar,
} from "#windows/index.js";

gsap.registerPlugin(Draggable);

function App() {
    return (
        <main>
            {/* Componenti pagina */}
            <NavBar />
            <Welcome />
            <Dock />

            {/* Finestre App */}
            <Finder />
            <Safari />
            <Calendar/>
            <VsCode/>
            <Contact />
            <Terminal />

            {/* Visualizzatore File */}
            <File />

            {/* Desktop */}
            <Home/>
        </main>
    )
}

export default App;