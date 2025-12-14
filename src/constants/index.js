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
        content: "import { WindowControls } from \"../components/index.js\";\n" +
            "import WindowWrapper from \"../hoc/WindowWrapper.jsx\";\n" +
            "import { HangoutModal } from \"./components/index.js\";\n" +
            "import { useState, useMemo, useRef } from \"react\";\n" +
            "import { useQuery, useMutation } from \"convex/react\";\n" +
            "import { api } from \"../../convex/_generated/api\";\n" +
            "import { useGSAP } from \"@gsap/react\";\n" +
            "import gsap from \"gsap\";\n" +
            "import useWindowStore from \"#store/window.js\";\n" +
            "import {\n" +
            "    monthNames,\n" +
            "    dayLabels,\n" +
            "    formatDateDisplay,\n" +
            "    formatDateString,\n" +
            "    calculateDaysDifference,\n" +
            "    getMonthData\n" +
            "} from \"#constants/index.js\";\n" +
            "\n" +
            "const Calendar = () => {\n" +
            "    const [currentDate, setCurrentDate] = useState(new Date());\n" +
            "    const [selectedDate, setSelectedDate] = useState(null);\n" +
            "    const [isModalOpen, setIsModalOpen] = useState(false);\n" +
            "    const [editingHangout, setEditingHangout] = useState(null);\n" +
            "\n" +
            "    const calendarGridRef = useRef(null);\n" +
            "    const monthYearRef = useRef(null);\n" +
            "    const statsRef = useRef(null);\n" +
            "\n" +
            "    // Get maximized state from store\n" +
            "    const isMaximized = useWindowStore((state) => state.windows.calendar?.isMaximized || false);\n" +
            "\n" +
            "    // Convex operations\n" +
            "    const hangouts = useQuery(api.hangouts.list) || [];\n" +
            "    const createHangout = useMutation(api.hangouts.create);\n" +
            "    const updateHangout = useMutation(api.hangouts.update);\n" +
            "    const deleteHangout = useMutation(api.hangouts.remove);\n" +
            "\n" +
            "    const year = currentDate.getFullYear();\n" +
            "    const month = currentDate.getMonth();\n" +
            "    const today = new Date();\n" +
            "\n" +
            "    // Create hangouts lookup map\n" +
            "    const hangoutsMap = useMemo(() =>\n" +
            "            hangouts.reduce((acc, h) => ({ ...acc, [h.date]: h }), {})\n" +
            "        , [hangouts]);\n" +
            "\n" +
            "    // Calculate comprehensive stats\n" +
            "    const stats = useMemo(() => {\n" +
            "        const sortedHangouts = [...hangouts]\n" +
            "            .map(h => {\n" +
            "                const [day, month, year] = h.date.split('-').map(Number);\n" +
            "                return { ...h, dateObj: new Date(year, month - 1, day) };\n" +
            "            })\n" +
            "            .sort((a, b) => a.dateObj - b.dateObj);\n" +
            "\n" +
            "        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());\n" +
            "\n" +
            "        const pastHangouts = sortedHangouts.filter(h => h.dateObj < todayDate);\n" +
            "        const futureHangouts = sortedHangouts.filter(h => h.dateObj > todayDate);\n" +
            "\n" +
            "        // Calculate average rating from past hangouts with ratings\n" +
            "        const ratedHangouts = pastHangouts.filter(h => h.stars && h.stars > 0);\n" +
            "        const avgRating = ratedHangouts.length > 0\n" +
            "            ? ratedHangouts.reduce((sum, h) => sum + h.stars, 0) / ratedHangouts.length\n" +
            "            : 0;\n" +
            "\n" +
            "        return {\n" +
            "            nextHangout: futureHangouts[0] || null,\n" +
            "            lastHangout: pastHangouts[pastHangouts.length - 1] || null,\n" +
            "            totalHangouts: hangouts.length,\n" +
            "            pastCount: pastHangouts.length,\n" +
            "            futureCount: futureHangouts.length,\n" +
            "            averageRating: avgRating,\n" +
            "            ratedCount: ratedHangouts.length\n" +
            "        };\n" +
            "    }, [hangouts, today]);\n" +
            "\n" +
            "    // Animate stats on mount\n" +
            "    useGSAP(() => {\n" +
            "        if (!statsRef.current) return;\n" +
            "\n" +
            "        gsap.fromTo(\n" +
            "            statsRef.current.children,\n" +
            "            { opacity: 0, y: 20 },\n" +
            "            {\n" +
            "                opacity: 1,\n" +
            "                y: 0,\n" +
            "                duration: 0.5,\n" +
            "                stagger: 0.1,\n" +
            "                ease: \"power2.out\"\n" +
            "            }\n" +
            "        );\n" +
            "    }, []);\n" +
            "\n" +
            "    // Month transition animation\n" +
            "    const animateMonthChange = (direction) => {\n" +
            "        if (!calendarGridRef.current) return;\n" +
            "\n" +
            "        const offset = direction === \"next\" ? -20 : 20;\n" +
            "        const tl = gsap.timeline();\n" +
            "\n" +
            "        tl.to(calendarGridRef.current, {\n" +
            "            opacity: 0,\n" +
            "            x: offset,\n" +
            "            duration: 0.3,\n" +
            "            ease: \"power2.in\",\n" +
            "        })\n" +
            "            .call(() => {\n" +
            "                setCurrentDate(new Date(year, month + (direction === \"next\" ? 1 : -1), 1));\n" +
            "            })\n" +
            "            .fromTo(calendarGridRef.current,\n" +
            "                { opacity: 0, x: -offset },\n" +
            "                { opacity: 1, x: 0, duration: 0.3, ease: \"power2.out\" }\n" +
            "            );\n" +
            "    };\n" +
            "\n" +
            "    // Animate month/year header\n" +
            "    useGSAP(() => {\n" +
            "        if (!monthYearRef.current) return;\n" +
            "        gsap.fromTo(monthYearRef.current,\n" +
            "            { opacity: 0, y: -10 },\n" +
            "            { opacity: 1, y: 0, duration: 0.4, ease: \"power2.out\" }\n" +
            "        );\n" +
            "    }, [month, year]);\n" +
            "\n" +
            "    // Modal handlers\n" +
            "    const openModal = (day) => {\n" +
            "        const dateStr = formatDateString(day, month + 1, year);\n" +
            "        setSelectedDate(dateStr);\n" +
            "        setEditingHangout(hangoutsMap[dateStr] || null);\n" +
            "        setIsModalOpen(true);\n" +
            "    };\n" +
            "\n" +
            "    const closeModal = () => {\n" +
            "        setIsModalOpen(false);\n" +
            "        setSelectedDate(null);\n" +
            "        setEditingHangout(null);\n" +
            "    };\n" +
            "\n" +
            "    const handleSave = async (data) => {\n" +
            "        if (!selectedDate) return;\n" +
            "\n" +
            "        try {\n" +
            "            if (editingHangout) {\n" +
            "                await updateHangout({\n" +
            "                    id: editingHangout._id,\n" +
            "                    description: data.description,\n" +
            "                    stars: data.stars,\n" +
            "                });\n" +
            "            } else {\n" +
            "                await createHangout({\n" +
            "                    date: selectedDate,\n" +
            "                    description: data.description,\n" +
            "                    stars: data.stars,\n" +
            "                });\n" +
            "            }\n" +
            "        } catch (error) {\n" +
            "            console.error(\"Error saving hangout:\", error);\n" +
            "        }\n" +
            "    };\n" +
            "\n" +
            "    const handleDelete = async () => {\n" +
            "        if (!editingHangout) return;\n" +
            "\n" +
            "        try {\n" +
            "            await deleteHangout({ id: editingHangout._id });\n" +
            "        } catch (error) {\n" +
            "            console.error(\"Error deleting hangout:\", error);\n" +
            "        }\n" +
            "    };\n" +
            "\n" +
            "    // Day click animation\n" +
            "    const handleDayClick = (day, event) => {\n" +
            "        gsap.fromTo(event.currentTarget,\n" +
            "            { scale: 1 },\n" +
            "            {\n" +
            "                scale: 1.1,\n" +
            "                duration: 0.15,\n" +
            "                ease: \"power2.out\",\n" +
            "                yoyo: true,\n" +
            "                repeat: 1,\n" +
            "                onComplete: () => openModal(day),\n" +
            "            }\n" +
            "        );\n" +
            "    };\n" +
            "\n" +
            "    // Generic hover animation\n" +
            "    const animateHover = (e, isEnter) => {\n" +
            "        gsap.to(e.currentTarget, {\n" +
            "            scale: isEnter ? 1.05 : 1,\n" +
            "            duration: 0.2,\n" +
            "            ease: \"power2.out\",\n" +
            "        });\n" +
            "    };\n" +
            "\n" +
            "    // Render calendar days\n" +
            "    const renderCalendarDays = () => {\n" +
            "        const { daysInMonth, startingDayOfWeek } = getMonthData(year, month);\n" +
            "        const days = [];\n" +
            "\n" +
            "        // Empty cells\n" +
            "        for (let i = 0; i < startingDayOfWeek; i++) {\n" +
            "            days.push(<div key={`empty-${i}`} className=\"aspect-square\" />);\n" +
            "        }\n" +
            "\n" +
            "        // Days\n" +
            "        for (let day = 1; day <= daysInMonth; day++) {\n" +
            "            const dateStr = formatDateString(day, month + 1, year);\n" +
            "            const hangout = hangoutsMap[dateStr];\n" +
            "            const isTodayDate = today.getDate() === day &&\n" +
            "                today.getMonth() === month &&\n" +
            "                today.getFullYear() === year;\n" +
            "\n" +
            "            days.push(\n" +
            "                <button\n" +
            "                    key={day}\n" +
            "                    onClick={(e) => handleDayClick(day, e)}\n" +
            "                    onMouseEnter={(e) => animateHover(e, true)}\n" +
            "                    onMouseLeave={(e) => animateHover(e, false)}\n" +
            "                    className={`\n" +
            "                        aspect-square relative flex flex-col items-center justify-center\n" +
            "                        rounded-md transition-colors duration-200\n" +
            "                        ${isTodayDate ? \"bg-red-400/20 text-white font-semibold\" : \"text-gray-300\"}\n" +
            "                        ${hangout ? \"ring-1 ring-red-500\" : \"\"}\n" +
            "                        hover:bg-gray-700\n" +
            "                    `}\n" +
            "                >\n" +
            "                    <span className={isMaximized ? \"text-lg font-medium\" : \"text-sm\"}>{day}</span>\n" +
            "                    {hangout?.stars > 0 && (\n" +
            "                        <div className=\"flex gap-0.5 mt-0.5\">\n" +
            "                            {[...Array(hangout.stars)].map((_, i) => (\n" +
            "                                <span key={i} className={isMaximized ? \"text-xs text-red-400\" : \"text-[8px] text-red-400\"}>●</span>\n" +
            "                            ))}\n" +
            "                        </div>\n" +
            "                    )}\n" +
            "                </button>\n" +
            "            );\n" +
            "        }\n" +
            "\n" +
            "        return days;\n" +
            "    };\n" +
            "\n" +
            "    return (\n" +
            "        <>\n" +
            "            <div className={`\n" +
            "                calendar-background rounded-lg shadow-2xl flex flex-col border border-gray-700 overflow-hidden\n" +
            "                ${isMaximized ? 'w-full h-full' : 'w-[650px] h-[750px]'}\n" +
            "            `}>\n" +
            "                <div\n" +
            "                    id=\"window-header\"\n" +
            "                    className=\"flex items-center bg-gray-800 bg-opacity-50 px-4 py-3 border-b border-gray-700 flex-shrink-0\"\n" +
            "                >\n" +
            "                    <WindowControls target=\"calendar\" />\n" +
            "                    <h2 className=\"ml-3 font-semibold text-gray-200\">Calendar</h2>\n" +
            "                </div>\n" +
            "\n" +
            "                <div className={`calendar-content ${isMaximized ? 'p-12' : ''}`}>\n" +
            "                    {/* Header Navigation */}\n" +
            "                    <div className=\"flex items-center justify-between mb-6\">\n" +
            "                        <button\n" +
            "                            onClick={() => animateMonthChange(\"prev\")}\n" +
            "                            onMouseEnter={(e) => animateHover(e, true)}\n" +
            "                            onMouseLeave={(e) => animateHover(e, false)}\n" +
            "                            className=\"calendar-nav-button\"\n" +
            "                        >\n" +
            "                            <svg className={isMaximized ? \"w-6 h-6 text-gray-400\" : \"w-5 h-5 text-gray-400\"} fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n" +
            "                                <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M15 19l-7-7 7-7\" />\n" +
            "                            </svg>\n" +
            "                        </button>\n" +
            "\n" +
            "                        <div className=\"calendar-header\">\n" +
            "                            <h3 ref={monthYearRef} className={`font-semibold text-red-400 ${isMaximized ? 'text-4xl' : 'text-xl'}`}>\n" +
            "                                {monthNames[month]} {year}\n" +
            "                            </h3>\n" +
            "                            <button\n" +
            "                                onClick={() => setCurrentDate(new Date())}\n" +
            "                                className={`text-red-500 hover:text-red-400 mt-1 transition-colors ${isMaximized ? 'text-lg' : 'text-sm'}`}\n" +
            "                            >\n" +
            "                                Today\n" +
            "                            </button>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <button\n" +
            "                            onClick={() => animateMonthChange(\"next\")}\n" +
            "                            onMouseEnter={(e) => animateHover(e, true)}\n" +
            "                            onMouseLeave={(e) => animateHover(e, false)}\n" +
            "                            className=\"calendar-nav-button\"\n" +
            "                        >\n" +
            "                            <svg className={isMaximized ? \"w-6 h-6 text-gray-400\" : \"w-5 h-5 text-gray-400\"} fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n" +
            "                                <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M9 5l7 7-7 7\" />\n" +
            "                            </svg>\n" +
            "                        </button>\n" +
            "                    </div>\n" +
            "                    <hr className=\"calendar-divider\" />\n" +
            "\n" +
            "                    {/* Day Labels */}\n" +
            "                    <div className={`\n" +
            "                        grid grid-cols-7 w-full\n" +
            "                        ${isMaximized ? 'gap-4 max-w-4xl mx-auto' : 'gap-2'}\n" +
            "                    `}>\n" +
            "                        {dayLabels.map((day, i) => (\n" +
            "                            <div\n" +
            "                                key={i}\n" +
            "                                className={`\n" +
            "                                    text-center font-medium text-gray-400 uppercase tracking-wider\n" +
            "                                    ${isMaximized ? 'text-lg' : 'text-xs'}\n" +
            "                                `}\n" +
            "                            >\n" +
            "                                {day}\n" +
            "                            </div>\n" +
            "                        ))}\n" +
            "                    </div>\n" +
            "                    <hr className=\"calendar-divider\" />\n" +
            "\n" +
            "                    {/* Calendar Grid */}\n" +
            "                    <div ref={calendarGridRef} className={`calendar-grid ${isMaximized ? 'gap-4 max-w-4xl mx-auto' : 'gap-2'}`}>\n" +
            "                        {renderCalendarDays()}\n" +
            "                    </div>\n" +
            "\n" +
            "                    <hr className=\"calendar-divider\" />\n" +
            "\n" +
            "                    {/* Enhanced Stats Section */}\n" +
            "                    <div ref={statsRef} className={`calendar-stats ${isMaximized ? 'gap-6 max-w-4xl mx-auto' : ''}`}>\n" +
            "                        {/* Next Hangout */}\n" +
            "                        <div className={`stat-card ${isMaximized ? 'p-6' : ''}`}>\n" +
            "                            <div className={`stat-label ${isMaximized ? 'text-sm mb-2' : ''}`}>\n" +
            "                                Next\n" +
            "                            </div>\n" +
            "                            {stats.nextHangout ? (\n" +
            "                                <>\n" +
            "                                    <div className=\"stat-value next\">\n" +
            "                                        {calculateDaysDifference(stats.nextHangout.dateObj, today, 'future')}\n" +
            "                                    </div>\n" +
            "                                    <div className={`stat-details ${isMaximized ? 'text-sm mt-1' : ''}`}>\n" +
            "                                        {formatDateDisplay(stats.nextHangout.date)}\n" +
            "                                    </div>\n" +
            "                                </>\n" +
            "                            ) : (\n" +
            "                                <div className={`stat-empty ${isMaximized ? 'text-base' : ''}`}>\n" +
            "                                    None planned\n" +
            "                                </div>\n" +
            "                            )}\n" +
            "                        </div>\n" +
            "\n" +
            "                        {/* Last Hangout */}\n" +
            "                        <div className={`stat-card ${isMaximized ? 'p-6' : ''}`}>\n" +
            "                            <div className={`stat-label ${isMaximized ? 'text-sm mb-2' : ''}`}>\n" +
            "                                Last\n" +
            "                            </div>\n" +
            "                            {stats.lastHangout ? (\n" +
            "                                <>\n" +
            "                                    <div className=\"stat-value last\">\n" +
            "                                        {calculateDaysDifference(stats.lastHangout.dateObj, today, 'past')}\n" +
            "                                    </div>\n" +
            "                                    <div className={`stat-details ${isMaximized ? 'text-sm mt-1' : ''}`}>\n" +
            "                                        {formatDateDisplay(stats.lastHangout.date)}\n" +
            "                                    </div>\n" +
            "                                </>\n" +
            "                            ) : (\n" +
            "                                <div className={`stat-empty ${isMaximized ? 'text-base' : ''}`}>\n" +
            "                                    No history\n" +
            "                                </div>\n" +
            "                            )}\n" +
            "                        </div>\n" +
            "\n" +
            "                        {/* Total Count */}\n" +
            "                        <div className={`stat-card ${isMaximized ? 'p-6' : ''}`}>\n" +
            "                            <div className={`stat-label ${isMaximized ? 'text-sm mb-2' : ''}`}>\n" +
            "                                Total\n" +
            "                            </div>\n" +
            "                            <div className=\"stat-value total\">\n" +
            "                                {stats.totalHangouts}\n" +
            "                            </div>\n" +
            "                            <div className={`stat-details ${isMaximized ? 'text-sm mt-1' : ''}`}>\n" +
            "                                {stats.pastCount} past · {stats.futureCount} future\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "\n" +
            "                        {/* Average Rating */}\n" +
            "                        <div className={`stat-card ${isMaximized ? 'p-6' : ''}`}>\n" +
            "                            <div className={`stat-label ${isMaximized ? 'text-sm mb-2' : ''}`}>\n" +
            "                                Avg Rating\n" +
            "                            </div>\n" +
            "                            {stats.ratedCount > 0 ? (\n" +
            "                                <>\n" +
            "                                    <div className=\"stat-value rating flex items-center gap-1\">\n" +
            "                                        {stats.averageRating.toFixed(1)}\n" +
            "                                        <span className={isMaximized ? 'text-2xl' : 'text-sm'}>★</span>\n" +
            "                                    </div>\n" +
            "                                    <div className={`stat-details ${isMaximized ? 'text-sm mt-1' : ''}`}>\n" +
            "                                        from {stats.ratedCount} rated\n" +
            "                                    </div>\n" +
            "                                </>\n" +
            "                            ) : (\n" +
            "                                <div className={`stat-empty ${isMaximized ? 'text-base' : ''}`}>\n" +
            "                                    No ratings yet\n" +
            "                                </div>\n" +
            "                            )}\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "\n" +
            "            {/* Modal */}\n" +
            "            <HangoutModal\n" +
            "                key={editingHangout?._id || selectedDate}\n" +
            "                isOpen={isModalOpen}\n" +
            "                onClose={closeModal}\n" +
            "                onSave={handleSave}\n" +
            "                onDelete={handleDelete}\n" +
            "                selectedDate={selectedDate}\n" +
            "                initialData={editingHangout}\n" +
            "            />\n" +
            "        </>\n" +
            "    );\n" +
            "};\n" +
            "\n" +
            "const CalendarWindow = WindowWrapper(Calendar, \"calendar\");\n" +
            "export default CalendarWindow;" +
            "\n\n",
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

export const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];

export const getMonthData = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return {
        daysInMonth: lastDay.getDate(),
        startingDayOfWeek: firstDay.getDay()
    };
};

export const formatDateString = (day, month, year) => {
    return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`;
};

export const formatDateDisplay = (dateStr) => {
    if (!dateStr) return "";
    const [d, m, y] = dateStr.split('-').map(Number);
    return `${d} ${monthNames[m - 1]} ${y}`;
};

export const calculateDaysDifference = (targetDate, referenceDate, type) => {
    const todayDate = new Date(
        referenceDate.getFullYear(),
        referenceDate.getMonth(),
        referenceDate.getDate()
    );

    const diffTime = type === 'future'
        ? targetDate - todayDate
        : todayDate - targetDate;

    const diffDays = Math.ceil(Math.abs(diffTime) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return type === 'future' ? "Today! 🎉" : "Today 💕";
    }
    if (diffDays === 1) {
        return type === 'future' ? "Tomorrow" : "Yesterday";
    }

    return type === 'future'
        ? `${diffDays} days`
        : `${diffDays} days ago`;
};

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
                        "Ciao, ricordo molto bene quando ti ho vista in Sardegna," +
                        " ricordo anche come hai salutato mio padre e non me.. ma questa è " +
                        "un'altra storia. Credo indossassi un top rosso e dei pantaloncini neri, " +
                        "fatto sta che ti ho notata subbbito, ma il nonchalant final " +
                        "boss aveva altro a cui pensare (al suo pensiero giornaliero... forse) " +
                        "fatto sta che già al tempo stavo plottando qualcosa di molto malefico " +
                        "andarti a parlare, cosa che non ho nemmeno dovuto fare visto che alla fine " +
                        "la montagna è andata da Maometto (non per tua voltà contraria  ahimè).",

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

const TRASH_LOCATION = {
    id: 3,
    type: "trash",
    name: "Archive",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "cesso.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-30",
            imageUrl: "/images/cesso.png",
        },
        {
            id: 2,
            name: "emma.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/emma.png",
        },
        {
            id: 3,
            name: "ptsd.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-22 right-20",
            imageUrl: "/images/ptsd.png",
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
