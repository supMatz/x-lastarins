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
    if(!container) return () => {};

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
        <p ref={subtitleRef} className="tracking-wider">
            {renderText(
                "Ciao vita mia,",
                'text-3xl font-georama',
                100,
            )}
            <br/>
        </p>

        <h1 ref={titleRef}>
            {renderText("tiamo!", 'text-9xl italic font-georama')}
        </h1>

        <div className="small-screen">
            <p>
                Vita devi guardarlo dal tablet o dal pc
            </p>
        </div>
    </section>;
}

export default Welcome
