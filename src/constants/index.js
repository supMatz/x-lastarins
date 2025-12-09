import gsap from "gsap";

const navLinks = [
    {
        id: 1,
        name: "Our Files",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact Me Bih",
        type: "contact",
    },
    {
        id: 4,
        name: "Our Calendar",
        type: "calendar",
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
        name: "Finder",
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Safari",
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "calendar",
        name: "Calendar",
        icon: "calendar.png",
        canOpen: true,
    },
    {
        id: "vscode",
        name: "Visual Studio Code",
        icon: "vscode.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contacts",
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Terminal",
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive",
        icon: "trash.png",
        canOpen: false,
    },
];

const techStack = [
    {
        category: "Gorgeous",
        items: ["Emma"],
    },
    {
        category: "Jealous",
        items: ["Both"],
    },
    {
        category: "Smart",
        items: ["Mattia"],
    },
    {
        category: "Plaintive",
        items: ["Emma"],
    },
    {
        category: "Evil",
        items: ["Emma"],
    },
    {
        category: "Kind",
        items: ["Mattia"],
    },
    {
        category: "Edible",
        items: ["Emma"],
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

const visualStudioCodeItems = [
    {
        id: "descrizione-calendario",
        title: "README.txt",
        icon: "/icons/cpu.svg",
        content: "-Ti chiederai: cos'è sta merda?\n"+
                 "Questo calendario serve a tener traccia delle nostre uscite" +
                 " passate, ma anche di quelle future!\n" +
                 "Il funzionamento è molto semplice" +
                 " puoi aggiungere, modificare o eliminare (in caso di errore)\n" +
                 "tutte le uscite che vuoi.",
    },
    {
        id: "codice-sorgente",
        title: "codice sorgente calendario",
        content: "",
    }
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export {
    navLinks,
    navIcons,
    dockApps,
    techStack,
    socials,
    visualStudioCodeItems,
    monthNames,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Dates",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        {
            id: 5,
            name: "6/2024",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[1vh] left-3.5",
            children: [
                {
                    id: 1,
                    name: "first_time_we_met.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Ciao, ricordo molto bene quando ti ho vista per la prima volta," +
                        "ricordo anche come hai salutato mio padre e non me.. ma questa è " +
                        "un'altra storia. Credo avessi un top rosso e dei pantaloncini neri, " +
                        "fatto sta che ti ho notata subbbito e speravo mi cagassi un minimo " +
                        "anche se così non è stato, porcaccia la madre. Nah il nonchalant final " +
                        "boss aveva altro a cui pensare (al suo pensiero giornaliero... forse) " +
                        "fatto sta che già al tempo stavo plottando qualcosa di molto malefico " +
                        "andarti a parlare, cosa che non ho nemmeno dovuto fare visto che alla fine " +
                        "la montagna è andata da Maometto (non per tua voltà contraria  ahimè). Vabbe comunque " +
                        "molto interlinked anche se avevo la paura che fosse solo una cosa momentanea. " +
                        "Paura durata ben poco visto che ci siamo visti lo stesso mese, a luglio (prima di " +
                        "partire per l'Elba e tutti i mesi fino ad ora).",

                    ],
                },
                {
                    id: 2,
                    name: "us.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/us.png",
                },
                {
                    id: 3,
                    name: "princess-passenger.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-32 right-23",
                    imageUrl: "/images/princess-passenger.png",
                },
            ],
        },
        {
            id: 6,
            name: "2/2025",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-7 right-5",
            windowPosition: "top-[14px] left-25 ",
            children: [
                {
                    id: 1,
                    name: "bicocca.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-5 left-10",
                    imageUrl: "/images/bicocca.png",
                },
                {
                    id: 2,
                    name: "la-rue-levrai.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-10 right-20",
                    imageUrl: "/images/emma-larue.png",
                }
            ],
        },
        {
            id: 7,
            name: "random pics",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-40 right-53",
            windowPosition: "top-[8vh] left-1.5",
            children: [
                {
                    id: 1,
                    name: "lettuccio.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-10 right-80",
                    imageUrl: "/images/lettuccio.png",
                },
                {
                    id: 2,
                    name: "uhmm.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-41 right-80",
                    imageUrl: "/images/uhmm.png",
                },
                {
                    id: 3,
                    name: "farinami.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-2 right-50",
                    imageUrl: "/images/farinami.png",
                },
                {
                    id: 4,
                    name: "camera-mia.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-40 right-40",
                    imageUrl: "/images/camera-mia.png",
                },
                {
                    id: 5,
                    name: "ricordi.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-35 right-5",
                    imageUrl: "/images/sard-hex.png",
                }
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "Todo's",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "cosa-fare-oggi.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-20 left-5",
            description: [
                "Me."
            ],
        }
    ],
};

// TODO : INSERIRE ROBA NELLA TRASH LOC.
const TRASH_LOCATION = {
    id: 3,
    type: "trash",
    name: "Archive",
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
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    calendar: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    viewer: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
    vscode: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };