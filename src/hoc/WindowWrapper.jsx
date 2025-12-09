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
        const originalSizeRef = useRef(null);

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
                    force3D: true,
                }
            );
        }, [isOpen])

        useGSAP(() => {
            const el = ref.current;
            if(!el) return;

            const [instance] = Draggable.create(el, {
                onPress: () => focusWindow(windowKey),
                trigger: el.querySelector('#window-header'),
                force3D: true,
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
                if (!originalSizeRef.current) {
                    const computedStyle = window.getComputedStyle(el);

                    originalSizeRef.current = {
                        width: computedStyle.width,
                        height: computedStyle.height,
                        maxWidth: computedStyle.maxWidth,
                        maxHeight: computedStyle.maxHeight,
                        top: computedStyle.top,
                        left: computedStyle.left,
                        transform: computedStyle.transform,
                    };
                }

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
                    xPercent: 0,
                    yPercent: 0,
                    duration: 0.35,
                    ease: "power2.inOut",
                    force3D: true,
                    onStart: () => {
                        el.style.willChange = 'transform, width, height, top, left';
                    },
                    onComplete: () => {
                        el.style.willChange = 'auto';
                    }
                });
            } else {
                if(draggable) {
                    draggable.enable();
                    gsap.set(el, { x: 0, y: 0 });
                }

                const original = originalSizeRef.current;

                gsap.to(el, {
                    position: 'absolute',
                    top: original?.top || '50%',
                    left: original?.left || '50%',
                    width: original?.width || 'auto',
                    height: original?.height || 'auto',
                    maxWidth: original?.maxWidth !== 'none' ? original.maxWidth : '',
                    maxHeight: original?.maxHeight !== 'none' ? original.maxHeight : '',
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    duration: 0.35,
                    ease: "power2.inOut",
                    force3D: true,
                    onStart: () => {
                        el.style.willChange = 'transform, width, height, top, left';
                        if(original?.transform && original.transform !== 'none') {
                            el.style.transform = original.transform;
                        }
                    },
                    onComplete: () => {
                        el.style.willChange = 'auto';
                        originalSizeRef.current = null;
                        if(draggable) draggable.update();
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
                className={`absolute select-none ${isMaximized ? 'maximized' : ''}`}
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