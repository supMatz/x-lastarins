import { WindowControls } from "../components/index.js";
import WindowWrapper from "../hoc/WindowWrapper.jsx";
import { useQuery, useMutation } from "convex/react";
import {HangoutModal} from "./components/index.js";
import { useState, useMemo, useRef } from "react";
import { api } from "../../convex/_generated/api";
import {monthNames} from "#constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const calendarGridRef = useRef(null);
    const monthYearRef = useRef(null);
    const dayRefs = useRef([]);

    // Convex queries and mutations
    const uscite = useQuery(api.hangouts.list) || [];
    const createHangout = useMutation(api.hangouts.create);
    const updateHangout = useMutation(api.hangouts.update);
    const deleteHangout = useMutation(api.hangouts.remove);

    // calcoli
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const today = new Date();
    const isToday = (day) => {
        return (
            today.getDate() === day &&
            today.getMonth() === month &&
            today.getFullYear() === year
        );
    };

    const hangoutsMap = useMemo(() => {
        const map = {};
        uscite.forEach((hangout) => {
            map[hangout.date] = hangout;
        });
        return map;
    }, [uscite]);

    // animazione mesi
    const animateMonthChange = (direction) => {
        if (!calendarGridRef.current) return;

        const tl = gsap.timeline();

        tl.to(calendarGridRef.current, {
            opacity: 0,
            x: direction === "next" ? -20 : 20,
            duration: 0.2,
            ease: "power2.in",
            force3D: true,
        });

        tl.call(() => {
            if (direction === "next") {
                setCurrentDate(new Date(year, month + 1, 1));
            } else {
                setCurrentDate(new Date(year, month - 1, 1));
            }
        });

        tl.fromTo(
            calendarGridRef.current,
            { opacity: 0, x: direction === "next" ? 20 : -20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.2,
                ease: "power2.out",
                force3D: true,
            }
        );
    };

    // animazione per mese e anno
    useGSAP(() => {
        if (!monthYearRef.current) return;

        gsap.fromTo(
            monthYearRef.current,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
    }, [month, year]);

    // Navigation
    const goToPreviousMonth = () => {
        animateMonthChange("prev");
    };

    const goToNextMonth = () => {
        animateMonthChange("next");
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    // Modal handlers
    const openModal = (day) => {
        const dateStr = `${String(day).padStart(2, "0")}-${String(month + 1).padStart(2, "0")}-${year}`;
        setSelectedDate(dateStr);

        const existingHangout = hangoutsMap[dateStr];
        if (existingHangout) {
            setModalData({
                description: existingHangout.description,
                stars: existingHangout.stars,
                _id: existingHangout._id,
            });
        } else {
            setModalData({
                description: "",
                stars: 0,
                _id: null,
            });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDate(null);
        setModalData(null);
    };

    const handleSave = async (data) => {
        if (!selectedDate) return;

        try {
            if (modalData?._id) {
                // Update existing hangout
                await updateHangout({
                    id: modalData._id,
                    description: data.description,
                    stars: data.stars,
                });
            } else {
                // Create new hangout
                await createHangout({
                    date: selectedDate,
                    description: data.description,
                    stars: data.stars,
                });
            }
        } catch (error) {
            console.error("Error saving hangout:", error);
        }
    };

    const handleDelete = async () => {
        if (!modalData?._id) return;

        try {
            await deleteHangout({ id: modalData._id });
        } catch (error) {
            console.error("Error deleting hangout:", error);
        }
    };

    // Day click animation
    const handleDayClick = (day, event) => {
        // Pulse effect on click
        gsap.fromTo(
            event.currentTarget,
            { scale: 1 },
            {
                scale: 1.1,
                duration: 0.15,
                ease: "power2.out",
                yoyo: true,
                repeat: 1,
                onComplete: () => openModal(day),
            }
        );
    };

    // Day hover handlers
    const handleDayMouseEnter = (event) => {
        gsap.to(event.currentTarget, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const handleDayMouseLeave = (event) => {
        gsap.to(event.currentTarget, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    // Render calendar days
    const renderCalendarDays = () => {
        const days = [];
        dayRefs.current = [];

        // Empty cells for days before month starts
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(<div key={`empty-${i}`} className="aspect-square" />);
        }

        // Actual days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${String(day).padStart(2, "0")}-${String(month + 1).padStart(2, "0")}-${year}`;
            const hangout = hangoutsMap[dateStr];
            const isTodayDate = isToday(day);

            days.push(
                <button
                    key={day}
                    ref={(el) => (dayRefs.current[day - 1] = el)}
                    onClick={(e) => handleDayClick(day, e)}
                    onMouseEnter={handleDayMouseEnter}
                    onMouseLeave={handleDayMouseLeave}
                    className={`
            aspect-square relative flex flex-col items-center justify-center
            rounded-md transition-colors duration-200
            ${isTodayDate ? "bg-red-400/20 text-white font-semibold" : "text-gray-300"}
            ${hangout ? "ring-1 ring-red-500" : ""}
            hover:bg-gray-700
          `}
                >
                    <span className="text-sm">{day}</span>
                    {hangout && (
                        <div className="flex gap-0.5 mt-0.5">
                            {[...Array(hangout.stars)].map((_, i) => (
                                <span key={i} className="text-[8px] text-red-400">
                  ●
                </span>
                            ))}
                        </div>
                    )}
                </button>
            );
        }

        return days;
    };



    // Navigation button handlers with animations
    const handleNavButtonMouseEnter = (event) => {
        gsap.to(event.currentTarget, {
            scale: 1.1,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const handleNavButtonMouseLeave = (event) => {
        gsap.to(event.currentTarget, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    return (
        <>
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-2xl w-[600px] h-[650px] flex flex-col border border-gray-700 overflow-hidden">
                <div
                    id="window-header"
                    className="flex items-center bg-gray-800 bg-opacity-50 px-4 py-3 border-b border-gray-700"
                >
                    <WindowControls target="calendar" />
                    <h2 className="ml-3 font-semibold text-gray-200">Calendar</h2>
                </div>

                <div className="flex-1 flex flex-col p-6 overflow-hidden">
                    {/* Header with navigation */}
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={goToPreviousMonth}
                            onMouseEnter={handleNavButtonMouseEnter}
                            onMouseLeave={handleNavButtonMouseLeave}
                            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                        >
                            <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <div className="text-center">
                            <h3
                                ref={monthYearRef}
                                className="text-xl font-semibold text-red-400"
                            >
                                {monthNames[month]} {year}
                            </h3>
                            <button
                                onClick={goToToday}
                                className="text-sm text-red-500 hover:text-red-400 mt-1 transition-colors"
                            >
                                Today
                            </button>
                        </div>

                        <button
                            onClick={goToNextMonth}
                            onMouseEnter={handleNavButtonMouseEnter}
                            onMouseLeave={handleNavButtonMouseLeave}
                            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                        >
                            <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Day labels */}
                    <div className="grid grid-cols-7 gap-2 mb-2">
                        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                            <div
                                key={i}
                                className="text-center text-xs font-medium text-gray-500"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar grid */}
                    <div
                        ref={calendarGridRef}
                        className="grid grid-cols-7 gap-2 flex-1"
                    >
                        {renderCalendarDays()}
                    </div>

                    {/* Modale Edit/Insert */}
                    <HangoutModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onSave={handleSave}
                        onDelete={handleDelete}
                        selectedDate={selectedDate}
                        initialData={modalData}
                    />
                </div>
            </div>
        </>
    );
};

const CalendarWindow = WindowWrapper(Calendar, "calendar");
export default CalendarWindow;