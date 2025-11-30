const navLinks = [
    {
        id: 1,
        name: "Progetti",
        type: "finder",
    },
    {
        id: 3,
        name: "Contatti",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Area Professionale",
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Area Umanistica",
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Apra",
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "vscode",
        name: "Educazione Civica",
        icon: "vscode.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contatti",
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills",
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Old CV",
        icon: "trash.png",
        canOpen: false,
    },
];

const  areeUmanistiche = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title: "1",
        description: "",
    },
    {
        id: 2,
        date: "Sep 28, 2025",
        title: "2",
        description: "",
    },
    {
        id: 3,
        date: "Oct 15, 2025",
        title: "3",
        description: "",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native"],
    },
    {
        category: "Desktop",
        items: ["Electron.js + Next.js", "C# & .NET FrameWork"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Bootstrap"],
    },
    {
        category: "Backend",
        items: ["Node.js", "C#"],
    },
    {
        category: "Database",
        items: ["MongoDB", "MySql", "Convex", "Supabase"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Vs Code", "Jet Brains", "Fluxa"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#5e5a5a",
        link: "https://github.com/supMatz",
    },
    {
        id: 2,
        text: "Instagram",
        icon: "/icons/instagram.svg",
        bg: "#a152ff",
        link: "https://jsmastery.com/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#4079e3",
        link:"https://x.com/cerioni_mattiaa",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/mattia-cerioni-07aab02b3",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/apra1.png",
    },
    {
        id: 2,
        img: "/images/apra2.png",
    },
    {
        id: 3,
        img: "/images/apra3.png",
    },
    {
        id: 4,
        img: "/images/apra4.png",
    },
];

const photosTabsContent = [
    {
        id: "gallery",
        name: "Galleria",
        icon: "/icons/gicon1.svg",
        type: "gallery",
    },
    {
        id: "experience",
        name: "Conclusioni",
        icon: "/icons/file.svg",
        type: "text",
        title: "La mia esperienza in APRA",
        content: [
            "Sono arrivato in azienda con grande voglia di imparare e tanta curiosità, ansioso di mettere" +
            "    in pratica quanto avevo appreso durante il mio percorso scolastico. Fin dal primo giorno i ragazzi" +
            "    del team di sviluppo mi hanno accolto con grande disponibilità, sempre pronti a guidarmi e supportarmi" +
            "    in ogni fase del lavoro.\n\n",
            "Durante l’alternanza scuola-lavoro ho avuto la possibilità di lavorare su un progetto concreto e sfidante:" +
            "    sviluppare un middleware per integrare sistemi ERP e registratori di cassa. Ho scoperto quanto sia importante" +
            "    la comunicazione tra sistemi diversi e mi sono cimentato su alcune difficoltà tecniche.",
            "Ho lavorato utilizzando tecnologie come Next.js e TypeScript per il frontend, realizzando interfacce che rispettano" +
            "    lo standard “Essenzia”.\n\n Sul backend ho sviluppato in C# il middleware che realizza la comunicazione a due vie tra il" +
            "    gestionale dell’azienda e i registratori di cassa dei clienti di APRA Vargroup.\n\n" +
            "    Non solo programmazione pero’ per me: ho imparato l’importanza del lavoro di squadra, della scrittura del codice, dei" +
            "    test e delle scadenze in un contesto lavorativo reale. Ho imparato a muovermi con agilita’ su nuove tecnologie, a risolvere i problemi da solo e anche a capire quando è il caso di chiedere aiuto.\n\n ",
            "Questa esperienza mi ha insegnato molto più della semplice programmazione: ho imparato" +
            "    l'importanza del lavoro di squadra, della documentazione del codice, del testing e della" +
            "    gestione delle deadline in un ambiente professionale reale. Ho anche sviluppato la capacità" +
            "    di adattarmi rapidamente a nuove tecnologie e di risolvere problemi in autonomia, pur" +
            "    sapendo quando chiedere aiuto.\n\n",
            "Sono grato ad APRA Vargroup per questa opportunità formativa che ha consolidato la mia" +
            "    passione per lo sviluppo software e mi ha dato una visione concreta del lavoro che voglio" +
            "    svolgere nel mio futuro professionale.",
        ],
    },
];

const educazioneCivicaSections = [
    {
        id: "cittadinanza-digitale",
        title: "Cittadinanza Digitale",
        icon: "/icons/globe.svg", // usa un'icona che hai o cambiale
        language: "markdown",
        content: `## Identità Digitale
L'identità digitale rappresenta la nostra presenza online attraverso profili social, account e-mail e credenziali di accesso. È fondamentale proteggere questi dati con password sicure e autenticazione a due fattori.

## Diritti e Doveri Online
Come cittadini digitali abbiamo:
- **Diritto alla privacy**: I nostri dati personali devono essere protetti
- **Diritto all'oblio**: Possiamo richiedere la cancellazione dei nostri dati
- **Dovere di rispetto**: Evitare cyberbullismo e hate speech
- **Dovere di verifica**: Controllare le fonti prima di condividere informazioni

## Fake News e Disinformazione
Prima di condividere una notizia, chiediamoci:
1. La fonte è affidabile?
2. Ci sono altre fonti che confermano?
3. La data è recente o è una vecchia notizia?
4. Le immagini sono autentiche o manipolate?

## Impronta Digitale
Ogni nostra azione online lascia una traccia permanente. Pensaci sempre prima di:
- Pubblicare foto o video
- Commentare post controversi
- Condividere informazioni personali`,
    },
    {
        id: "ia-etica",
        title: "Etica nell'Intelligenza Artificiale",
        icon: "/icons/cpu.svg",
        language: "python",
        content: `## Principi Fondamentali

### 1. Trasparenza
L'AI deve essere comprensibile. Gli utenti devono sapere quando interagiscono con un sistema automatico.

\`\`\`python
# Esempio: Dichiarazione di utilizzo AI
def risposta_chatbot(domanda):
    return {
        "risposta": genera_risposta(domanda),
        "generato_da": "AI",
        "confidenza": 0.85
    }
\`\`\`

### 2. Equità e Non Discriminazione
Gli algoritmi non devono discriminare in base a:
- Genere
- Etnia
- Età
- Religione
- Orientamento sessuale

**Caso Studio**: Nel 2018, Amazon ha dovuto abbandonare un sistema di recruiting AI che discriminava le candidate donne.

### 3. Privacy e Protezione Dati
- L'AI non deve violare la privacy degli utenti
- I dati sensibili devono essere anonimizzati
- Serve il consenso esplicito per l'uso dei dati

### 4. Responsabilità Umana
Chi è responsabile quando un'AI sbaglia?
- Lo sviluppatore?
- L'azienda?
- L'utente?

**Principio**: L'umano deve sempre mantenere il controllo finale.

## Rischi dell'AI

### Deepfake
Video e audio falsi creati con AI che possono:
- Diffondere disinformazione
- Danneggiare reputazioni
- Manipolare opinioni pubbliche

### Bias Algoritmici
Gli algoritmi apprendono dai dati storici che possono contenere pregiudizi umani, perpetuando discriminazioni.

### Sorveglianza di Massa
Sistemi di riconoscimento facciale sollevano preoccupazioni su:
- Violazione della privacy
- Controllo sociale eccessivo
- Discriminazione razziale

## Il Futuro Responsabile
Come cittadini digitali dobbiamo:
1. **Educarci** sulle tecnologie AI
2. **Chiedere trasparenza** alle aziende tech
3. **Supportare regolamentazioni** etiche
4. **Usare l'AI responsabilmente** nei nostri progetti


`,
    },
    {
        id: "sicurezza",
        title: "Sicurezza Online",
        icon: "/icons/shield.svg",
        language: "javascript",
        content: `# Sicurezza Online

## Password Sicure

### Regole Fondamentali:
- Minimo 12 caratteri
- Maiuscole, minuscole, numeri, simboli
- Mai usare dati personali (nome, data di nascita)
- Password diversa per ogni servizio

\`\`\`javascript
// Esempio: Validazione password
function isPasswordSecure(password) {
    const minLength = password.length >= 12;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*]/.test(password);
    
    return minLength && hasUpperCase && 
           hasLowerCase && hasNumbers && hasSymbols;
}
\`\`\`

## Phishing
**Cos'è**: Tentativi di furto dati tramite email/messaggi falsi.

**Come riconoscerlo**:
- Mittente sospetto
- Errori grammaticali
- Richieste urgenti di dati personali
- Link strani (controlla l'URL prima di cliccare!)

## Malware e Virus
**Protezione**:
1. Antivirus aggiornato
2. Non scaricare file da fonti non sicure
3. Non cliccare link sospetti
4. Aggiornare sempre sistema operativo e app

## Social Engineering
Manipolazione psicologica per ottenere informazioni confidenziali.

**Esempio**: "Sono dell'assistenza tecnica, mi serve la tua password per risolvere il problema"
**Risposta corretta**: "Nessun supporto tecnico legittimo chiede mai la password!"

## Backup dei Dati
- **Regola 3-2-1**: 3 copie, 2 supporti diversi, 1 offsite
- Backup automatici settimanali
- Verifica periodica che i backup funzionino


`,
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    areeUmanistiche,
    techStack,
    socials,
    gallery,
    photosTabsContent,
    educazioneCivicaSections
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Progetti",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Fluxa",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[1vh] left-3.5",
            children: [
                {
                    id: 1,
                    name: "Features.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "-Infrastruttura globale:" +
                        " esecuzione alla massima velocità in tutto il mondo\n",
                        "-Sicurezza:" +
                        " crittografia dati sensibili con protocolli di sicurezza avanzati\n",
                        "-Sincronizzazione in Tempo Reale:" +
                        " sincronizzazione instantanea tra dispositivi\n",
                        "-Storage Illimitato:" +
                        " salva e gestisci progetti senza limiti di spazio\n",
                    ],
                },
                {
                    id: 2,
                    name: "fluxa.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://fluxa.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "compiler.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
            ],
        },
        // ▶ Project 2
        {
            id: 6,
            name: "Grand Blue",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-7 right-5",
            windowPosition: "top-[14px] left-25 ",
            children: [
                {
                    id: 1,
                    name: "pages.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "-Home\n"+
                        "-Users (Admin)\n"+
                        "-Profile\n" +
                        "-Activities\n"+
                        "-Rentals\n"+
                        "-Pricing\n" +
                        "-Reviews\n"+
                        "-404 custom\n"
                    ],
                },
                {
                    id: 2,
                    name: "under-construction",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "mobile-landing.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/diving-landing.png",
                },
            ],
        },
        // ▶ Project 3
        {
            id: 7,
            name: "Iphone Clone",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-60 right-53",
            windowPosition: "top-[8vh] left-1.5",
            children: [
                {
                    id: 1,
                    name: "github repo",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/supMatz/iphone-cerioni",
                    position: "top-10 right-20",
                },
                {
                    id: 2,
                    name: "3d-renders-section.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/iphone-renders.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/pfp.png",
            description: [
                "Ciao sono Mattia 👋, un web developer a cui piace costruire siti interattivi e gradevoli che funzionano effettivamente bene.",
                "Per le mie creazioni uso JavaScript/Typescript, React, e Next.js / Vite. Mi piace rendere ogni UX smooth, responsive e semplice.",
                "Progetto e sviluppo buone UI e UX, e scrivo codice a cui non serve un team per debuggarlo.",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/3d-cv-landing.png",
        },
        {
            id: 2,
            name: "3d-portfolio-cerioni",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://3d-portfolio-cerioni.vercel.app/",
            position: "top-40 left-80",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    viewer: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    vscode: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };