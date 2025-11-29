import useWindowStore from "#store/window.js";
import {useLayoutEffect, useRef} from "react";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const  { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex, isMaximized } = windows[windowKey];
        const ref = useRef(null);
        const draggableRef = useRef(null);
        const previousStateRef = useRef({ isMaximized: false });

        useGSAP(() => {
            const el = ref.current;
            if(!el || !isOpen) return;

            el.style.display = 'block';

            gsap.fromTo(el,
                { scale: 0.8, opacity: 0, y: 40 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    force3D: true, // Forced GPU acceleration
                }
            );
        }, [isOpen])

        useGSAP(() => {
            const el = ref.current;
            if(!el) return;

            const [instance] = Draggable.create(el, {
                onPress: () => focusWindow(windowKey),
                trigger: el.querySelector('#window-header'),
                force3D: true, // GPU acceleration
            });

            draggableRef.current = instance;

            return () => instance.kill();
        })

        useLayoutEffect(() => {
            const el = ref.current;
            const draggable = draggableRef.current;
            if(!el) return;

            if (previousStateRef.current.isMaximized === isMaximized) return;
            previousStateRef.current.isMaximized = isMaximized;

            if(isMaximized) {
                if(draggable) draggable.disable();

                gsap.to(el, {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    maxWidth: '100vw',
                    maxHeight: '100vh',
                    x: 0,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.inOut",
                    force3D: true, // GPU acceleration
                    clearProps: "transform",
                    onStart: () => {
                        el.style.willChange = 'transform, width, height, top, left';
                    },
                    onComplete: () => {
                        el.style.willChange = 'auto';
                    }
                });
            } else {
                if(draggable) draggable.enable();

                gsap.to(el, {
                    position: 'absolute',
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '',
                    maxHeight: '',
                    duration: 0.4,
                    ease: "power2.inOut",
                    force3D: true, // GPU acceleration
                    onStart: () => {
                        el.style.willChange = 'transform, width, height, top, left';
                    },
                    onComplete: () => {
                        el.style.willChange = 'auto';
                    }
                });
            }
        }, [isMaximized]);

        useLayoutEffect(() => {
            const el = ref.current;
            if(!el) return;
            el.style.display = isOpen ? 'block' : 'none';
        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{zIndex}}
                className={`absolute ${isMaximized ? 'maximized' : ''}`}
            >
                <Component {...props} />
            </section>
        )
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName ||
    Component.name || "Component"})`;

    return Wrapped;
}

export default WindowWrapper;