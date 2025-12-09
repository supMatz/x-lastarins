import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import {monthNames} from "#constants/index.js";
import gsap from "gsap";

const HangoutModal = ({ isOpen, onClose, onSave, onDelete, selectedDate, initialData }) => {
    const [description, setDescription] = useState("");
    const [stars, setStars] = useState(0);

    const overlayRef = useRef(null);
    const modalRef = useRef(null);
    const starRefs = useRef([]);

    // Initialize form data when modal opens
    useEffect(() => {
        if (isOpen && initialData) {
            setDescription(initialData.description || "");
            setStars(initialData.stars || 0);
        } else if (isOpen) {
            setDescription("");
            setStars(0);
        }
    }, [isOpen, initialData]);

    // Modal entrance/exit animations
    useGSAP(() => {
        if (!overlayRef.current || !modalRef.current) return;

        if (isOpen) {
            // Entrance animation
            gsap.fromTo(
                overlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: "power2.out", force3D : true }
            );

            gsap.fromTo(
                modalRef.current,
                { scale: 0.8, opacity: 0, y: 20 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "back.out(1.7)",
                    delay: 0.1,
                    force3D : true
                }
            );
        }
    }, [isOpen]);

    const handleClose = () => {
        // Exit animation
        const tl = gsap.timeline({
            onComplete: () => {
                onClose();
            }
        });

        tl.to(modalRef.current, {
            scale: 0.8,
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.in"
        });

        tl.to(overlayRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in"
        }, "-=0.2");
    };

    const handleSave = () => {
        onSave({ description, stars });
        handleClose();
    };

    const handleDelete = () => {
        onDelete();
        handleClose();
    };

    const handleStarClick = (starValue) => {
        setStars(starValue);

        // Pop animation on star click
        const starElement = starRefs.current[starValue - 1];
        if (starElement) {
            gsap.fromTo(
                starElement,
                { scale: 1 },
                {
                    scale: 1.3,
                    duration: 0.2,
                    ease: "back.out(3)",
                    yoyo: true,
                    repeat: 1
                }
            );
        }
    };

    const handleStarHover = (index, isHovering) => {
        const starElement = starRefs.current[index];
        if (starElement) {
            gsap.to(starElement, {
                scale: isHovering ? 1.15 : 1,
                duration: 0.2,
                ease: "power2.out"
            });
        }
    };

    const formatDisplayDate = (dateStr) => {
        if (!dateStr) return "";
        const [d, m, y] = dateStr.split('-');
        return `${parseInt(d)} ${monthNames[parseInt(m) - 1]} ${y}`;
    };

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/20  bg-opacity-70 flex items-center justify-center z-[10000]"
            onClick={handleClose}
        >
            <div
                ref={modalRef}
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-2xl w-[450px] p-6 border border-gray-700"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-xl font-semibold text-red-400 mb-4">
                    {initialData?._id ? 'Edit Hangout' : 'New Hangout'}
                </h3>

                {/* Date Display */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                        Data
                    </label>
                    <div className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300 border border-gray-700">
                        {formatDisplayDate(selectedDate)}
                    </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                        Cosa abbiamo fatto?
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none placeholder-gray-500 transition-all duration-200"
                        rows={4}
                        placeholder="Descrizione..."
                    />
                </div>

                {/* Star Rating */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                        Voto da 1-5? (campo obbligatorio)
                    </label>
                    <div className="flex gap-2 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                ref={(el) => (starRefs.current[star - 1] = el)}
                                onClick={() => handleStarClick(star)}
                                onMouseEnter={() => handleStarHover(star - 1, true)}
                                onMouseLeave={() => handleStarHover(star - 1, false)}
                                className="text-3xl focus:outline-none"
                            >
                                {star <= stars ? (
                                    <span className="text-red-500">★</span>
                                ) : (
                                    <span className="text-gray-600">☆</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    {initialData?._id && (
                        <button
                            onClick={handleDelete}
                            onMouseEnter={(e) => {
                                gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
                            }}
                            onMouseLeave={(e) => {
                                gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                            }}
                            onMouseDown={(e) => {
                                gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 });
                            }}
                            onMouseUp={(e) => {
                                gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 });
                            }}
                            className="font-semibold  px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Elimina
                        </button>
                    )}
                    <button
                        onClick={handleClose}
                        onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                        }}
                        onMouseDown={(e) => {
                            gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 });
                        }}
                        onMouseUp={(e) => {
                            gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 });
                        }}
                        className="font-semibold  px-4 py-2  bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors flex-1"
                    >
                        Annulla
                    </button>
                    <button
                        onClick={handleSave}
                        onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                        }}
                        onMouseDown={(e) => {
                            gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 });
                        }}
                        onMouseUp={(e) => {
                            gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 });
                        }}
                        className="font-semibold px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 transition-colors flex-1"
                    >
                        Salva
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HangoutModal;