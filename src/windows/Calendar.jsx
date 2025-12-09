import { WindowControls } from "../components/index.js";
import WindowWrapper from "../hoc/WindowWrapper.jsx";
import { HangoutModal } from "./components/index.js";
import { useState, useMemo, useRef } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "#store/window.js";
import {
    monthNames,
    dayLabels,
    formatDateDisplay,
    formatDateString,
    calculateDaysDifference,
    getMonthData
} from "#constants/index.js";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingHangout, setEditingHangout] = useState(null);

    const calendarGridRef = useRef(null);
    const monthYearRef = useRef(null);
    const statsRef = useRef(null);

    // Get maximized state from store
    const isMaximized = useWindowStore((state) => state.windows.calendar?.isMaximized || false);

    // Convex operations
    const hangouts = useQuery(api.hangouts.list) || [];
    const createHangout = useMutation(api.hangouts.create);
    const updateHangout = useMutation(api.hangouts.update);
    const deleteHangout = useMutation(api.hangouts.remove);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();

    // Create hangouts lookup map
    const hangoutsMap = useMemo(() =>
            hangouts.reduce((acc, h) => ({ ...acc, [h.date]: h }), {})
        , [hangouts]);

    // Calculate comprehensive stats
    const stats = useMemo(() => {
        const sortedHangouts = [...hangouts]
            .map(h => {
                const [day, month, year] = h.date.split('-').map(Number);
                return { ...h, dateObj: new Date(year, month - 1, day) };
            })
            .sort((a, b) => a.dateObj - b.dateObj);

        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        const pastHangouts = sortedHangouts.filter(h => h.dateObj < todayDate);
        const futureHangouts = sortedHangouts.filter(h => h.dateObj > todayDate);

        // Calculate average rating from past hangouts with ratings
        const ratedHangouts = pastHangouts.filter(h => h.stars && h.stars > 0);
        const avgRating = ratedHangouts.length > 0
            ? ratedHangouts.reduce((sum, h) => sum + h.stars, 0) / ratedHangouts.length
            : 0;

        return {
            nextHangout: futureHangouts[0] || null,
            lastHangout: pastHangouts[pastHangouts.length - 1] || null,
            totalHangouts: hangouts.length,
            pastCount: pastHangouts.length,
            futureCount: futureHangouts.length,
            averageRating: avgRating,
            ratedCount: ratedHangouts.length
        };
    }, [hangouts, today]);

    // Animate stats on mount
    useGSAP(() => {
        if (!statsRef.current) return;

        gsap.fromTo(
            statsRef.current.children,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out"
            }
        );
    }, []);

    // Month transition animation
    const animateMonthChange = (direction) => {
        if (!calendarGridRef.current) return;

        const offset = direction === "next" ? -20 : 20;
        const tl = gsap.timeline();

        tl.to(calendarGridRef.current, {
            opacity: 0,
            x: offset,
            duration: 0.3,
            ease: "power2.in",
        })
            .call(() => {
                setCurrentDate(new Date(year, month + (direction === "next" ? 1 : -1), 1));
            })
            .fromTo(calendarGridRef.current,
                { opacity: 0, x: -offset },
                { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
            );
    };

    // Animate month/year header
    useGSAP(() => {
        if (!monthYearRef.current) return;
        gsap.fromTo(monthYearRef.current,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
    }, [month, year]);

    // Modal handlers
    const openModal = (day) => {
        const dateStr = formatDateString(day, month + 1, year);
        setSelectedDate(dateStr);
        setEditingHangout(hangoutsMap[dateStr] || null);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDate(null);
        setEditingHangout(null);
    };

    const handleSave = async (data) => {
        if (!selectedDate) return;

        try {
            if (editingHangout) {
                await updateHangout({
                    id: editingHangout._id,
                    description: data.description,
                    stars: data.stars,
                });
            } else {
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
        if (!editingHangout) return;

        try {
            await deleteHangout({ id: editingHangout._id });
        } catch (error) {
            console.error("Error deleting hangout:", error);
        }
    };

    // Day click animation
    const handleDayClick = (day, event) => {
        gsap.fromTo(event.currentTarget,
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

    // Generic hover animation
    const animateHover = (e, isEnter) => {
        gsap.to(e.currentTarget, {
            scale: isEnter ? 1.05 : 1,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    // Render calendar days
    const renderCalendarDays = () => {
        const { daysInMonth, startingDayOfWeek } = getMonthData(year, month);
        const days = [];

        // Empty cells
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(<div key={`empty-${i}`} className="aspect-square" />);
        }

        // Days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = formatDateString(day, month + 1, year);
            const hangout = hangoutsMap[dateStr];
            const isTodayDate = today.getDate() === day &&
                today.getMonth() === month &&
                today.getFullYear() === year;

            days.push(
                <button
                    key={day}
                    onClick={(e) => handleDayClick(day, e)}
                    onMouseEnter={(e) => animateHover(e, true)}
                    onMouseLeave={(e) => animateHover(e, false)}
                    className={`
                        aspect-square relative flex flex-col items-center justify-center
                        rounded-md transition-colors duration-200
                        ${isTodayDate ? "bg-red-400/20 text-white font-semibold" : "text-gray-300"}
                        ${hangout ? "ring-1 ring-red-500" : ""}
                        hover:bg-gray-700
                    `}
                >
                    <span className={isMaximized ? "text-lg font-medium" : "text-sm"}>{day}</span>
                    {hangout?.stars > 0 && (
                        <div className="flex gap-0.5 mt-0.5">
                            {[...Array(hangout.stars)].map((_, i) => (
                                <span key={i} className={isMaximized ? "text-xs text-red-400" : "text-[8px] text-red-400"}>●</span>
                            ))}
                        </div>
                    )}
                </button>
            );
        }

        return days;
    };

    return (
        <>
            <div className={`
                calendar-background rounded-lg shadow-2xl flex flex-col border border-gray-700 overflow-hidden
                ${isMaximized ? 'w-full h-full' : 'w-[650px] h-[750px]'}
            `}>
                <div
                    id="window-header"
                    className="flex items-center bg-gray-800 bg-opacity-50 px-4 py-3 border-b border-gray-700 flex-shrink-0"
                >
                    <WindowControls target="calendar" />
                    <h2 className="ml-3 font-semibold text-gray-200">Calendar</h2>
                </div>

                <div className={`calendar-content ${isMaximized ? 'p-12' : ''}`}>
                    {/* Header Navigation */}
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={() => animateMonthChange("prev")}
                            onMouseEnter={(e) => animateHover(e, true)}
                            onMouseLeave={(e) => animateHover(e, false)}
                            className="calendar-nav-button"
                        >
                            <svg className={isMaximized ? "w-6 h-6 text-gray-400" : "w-5 h-5 text-gray-400"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="calendar-header">
                            <h3 ref={monthYearRef} className={`font-semibold text-red-400 ${isMaximized ? 'text-4xl' : 'text-xl'}`}>
                                {monthNames[month]} {year}
                            </h3>
                            <button
                                onClick={() => setCurrentDate(new Date())}
                                className={`text-red-500 hover:text-red-400 mt-1 transition-colors ${isMaximized ? 'text-lg' : 'text-sm'}`}
                            >
                                Today
                            </button>
                        </div>

                        <button
                            onClick={() => animateMonthChange("next")}
                            onMouseEnter={(e) => animateHover(e, true)}
                            onMouseLeave={(e) => animateHover(e, false)}
                            className="calendar-nav-button"
                        >
                            <svg className={isMaximized ? "w-6 h-6 text-gray-400" : "w-5 h-5 text-gray-400"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <hr className="calendar-divider" />

                    {/* Day Labels */}
                    <div className={`
                        grid grid-cols-7 w-full
                        ${isMaximized ? 'gap-4 max-w-4xl mx-auto' : 'gap-2'}
                    `}>
                        {dayLabels.map((day, i) => (
                            <div
                                key={i}
                                className={`
                                    text-center font-medium text-gray-400 uppercase tracking-wider
                                    ${isMaximized ? 'text-lg' : 'text-xs'}
                                `}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                    <hr className="calendar-divider" />

                    {/* Calendar Grid */}
                    <div ref={calendarGridRef} className={`calendar-grid ${isMaximized ? 'gap-4 max-w-4xl mx-auto' : 'gap-2'}`}>
                        {renderCalendarDays()}
                    </div>

                    <hr className="calendar-divider" />

                    {/* Enhanced Stats Section */}
                    <div ref={statsRef} className={`calendar-stats ${isMaximized ? 'gap-6 max-w-4xl mx-auto' : ''}`}>
                        {/* Next Hangout */}
                        <div className={`stat-card ${isMaximized ? 'p-6' : ''}`}>
                            <div className={`stat-label ${isMaximized ? 'text-sm mb-2' : ''}`}>
                                Next
                            </div>
                            {stats.nextHangout ? (
                                <>
                                    <div className="stat-value next">
                                        {calculateDaysDifference(stats.nextHangout.dateObj, today, 'future')}
                                    </div>
                                    <div className={`stat-details ${isMaximized ? 'text-sm mt-1' : ''}`}>
                                        {formatDateDisplay(stats.nextHangout.date)}
                                    </div>
                                </>
                            ) : (
                                <div className={`stat-empty ${isMaximized ? 'text-base' : ''}`}>
                                    None planned
                                </div>
                            )}
                        </div>

                        {/* Last Hangout */}
                        <div className={`stat-card ${isMaximized ? 'p-6' : ''}`}>
                            <div className={`stat-label ${isMaximized ? 'text-sm mb-2' : ''}`}>
                                Last
                            </div>
                            {stats.lastHangout ? (
                                <>
                                    <div className="stat-value last">
                                        {calculateDaysDifference(stats.lastHangout.dateObj, today, 'past')}
                                    </div>
                                    <div className={`stat-details ${isMaximized ? 'text-sm mt-1' : ''}`}>
                                        {formatDateDisplay(stats.lastHangout.date)}
                                    </div>
                                </>
                            ) : (
                                <div className={`stat-empty ${isMaximized ? 'text-base' : ''}`}>
                                    No history
                                </div>
                            )}
                        </div>

                        {/* Total Count */}
                        <div className={`stat-card ${isMaximized ? 'p-6' : ''}`}>
                            <div className={`stat-label ${isMaximized ? 'text-sm mb-2' : ''}`}>
                                Total
                            </div>
                            <div className="stat-value total">
                                {stats.totalHangouts}
                            </div>
                            <div className={`stat-details ${isMaximized ? 'text-sm mt-1' : ''}`}>
                                {stats.pastCount} past · {stats.futureCount} future
                            </div>
                        </div>

                        {/* Average Rating */}
                        <div className={`stat-card ${isMaximized ? 'p-6' : ''}`}>
                            <div className={`stat-label ${isMaximized ? 'text-sm mb-2' : ''}`}>
                                Avg Rating
                            </div>
                            {stats.ratedCount > 0 ? (
                                <>
                                    <div className="stat-value rating flex items-center gap-1">
                                        {stats.averageRating.toFixed(1)}
                                        <span className={isMaximized ? 'text-2xl' : 'text-sm'}>★</span>
                                    </div>
                                    <div className={`stat-details ${isMaximized ? 'text-sm mt-1' : ''}`}>
                                        from {stats.ratedCount} rated
                                    </div>
                                </>
                            ) : (
                                <div className={`stat-empty ${isMaximized ? 'text-base' : ''}`}>
                                    No ratings yet
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <HangoutModal
                key={editingHangout?._id || selectedDate}
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handleSave}
                onDelete={handleDelete}
                selectedDate={selectedDate}
                initialData={editingHangout}
            />
        </>
    );
};

const CalendarWindow = WindowWrapper(Calendar, "calendar");
export default CalendarWindow;