import {NavBar, Welcome, Dock, Home} from "#components/index.js"
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import {
    Safari,
    Terminal,
    Resume,
    Finder,
    File,
    Contact,
    Photos,
    VsCode
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
            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Contact />
            <Photos />
            <VsCode/>

            {/* Visualizzatore File */}
            <File />

            {/* Desktop */}
            <Home/>
        </main>
    )
}

export default App;