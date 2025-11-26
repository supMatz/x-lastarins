import {useGSAP} from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const FONT_WEIGHTS = {
    subtitle: {min:100, max:400, default: 100},
    title: {min:400, max:900, default: 400},
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{fontVariationSettings: `'wght' ${baseWeight}`}}
        >
            {char === "" ? '\u00A0' : char}
        </span>
    ))
}

const setUpTextHover = (container, type) => {
    if(!container) return;

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
        });
    }

    const letters = container.querySelectorAll("span");
    const {min, max, default: base } = FONT_WEIGHTS[type];

    const handleMouseMove = (e) => {
        const containerRect = container.getBoundingClientRect();
        const mouseX = e.clientX - containerRect.left;

        letters.forEach((letter) => {
            const letterRect = letter.getBoundingClientRect();
            const letterCenterX = letterRect.left - containerRect.left + letterRect.width / 2;
            const distance = Math.abs(mouseX - letterCenterX);
            const intensity = Math.exp(-(distance ** 2) / 10000);
            const weight = Math.round(min + (max - min) * intensity);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) => {animateLetter(letter, base,  0.3);
        });

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseup", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseup", handleMouseLeave);
        }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
};


const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {

        const titleCleanUp = setUpTextHover(titleRef.current, 'title');
        const subtitleCleanUp = setUpTextHover(subtitleRef.current, 'subtitle');

        return () => {
            subtitleCleanUp();
            titleCleanUp();
        }
    });

    return <section id="welcome">
        <p ref={subtitleRef}>
            {renderText(
                "Ciao, sono Mattia! Benvenuto nel mio",
                'text-3xl font-georama',
                100,
            )}
        </p>

        <h1 ref={titleRef} className="mt-7">
            {renderText("portfolio", 'text-9xl italic font-georama')}
        </h1>

        <div className="small-screen">
            <p>
                Questo Portfolio è stato creato solo per schermi di dimensioni desktop e tablet.
            </p>
        </div>
    </section>;
}

export default Welcome
