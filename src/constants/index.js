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
        name: "Ed. Civica",
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "vscode",
        name: "Apra",
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
        title:
            "1",
        image: "/images/blog1.png",
        link: "",
    },
    {
        id: 2,
        date: "Sep 28, 2025",
        title: "2",
        image: "/images/blog2.png",
        link: "",
    },
    {
        id: 3,
        date: "Oct 15, 2025",
        title: "3",
        image: "/images/blog3.png",
        link: "",
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
        link: "www.linkedin.com/in/mattia-cerioni-07aab02b3",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    areeUmanistiche,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
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
            windowPosition: "top-[5vh] left-5",
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
                        " crittografia dati sensibili con protocolli di sicurezza avanzatin\n",
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
        {
            id: 6,
            name: "Grand Blue",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5",
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
                        " crittografia dati sensibili con protocolli di sicurezza avanzatin\n",
                        "-Sincronizzazione in Tempo Reale:" +
                        " sincronizzazione instantanea tra dispositivi\n",
                        "-Storage Illimitato:" +
                        " salva e gestisci progetti senza limiti di spazio\n",
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
                    name: "diving-landing.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
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
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/adrian.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/adrian-2.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/adrian-3.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/adrian.jpg",
            description: [
                "Ciao sono Mattia 👋, un web developer a cui piace costruire siti interattivi e gradevoli che funzionano effettivamente bene.",
                "Per le mie creazioni uso JavaScript/Typescript, React, and Next.js or Vite. Mi piace rendere ogni UX smooth, responsive e semplice.",
                "Progetto e sviluppo buone UI e UX, e scrivo codice a per cui non serve un team per debuggarlo.",
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
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
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
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };