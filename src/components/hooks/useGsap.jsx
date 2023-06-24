import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useGsap = (start, end, markers, scrub, to, from, fromTo) => {
    const refEl = useRef(null);
    const timeline = useRef(gsap.timeline());

    gsap.registerPlugin(ScrollTrigger);

    const toContact = gsap.timeline({paused: true});
    useEffect(() => {

        timeline.current = gsap.timeline({
            scrollTrigger: {
                trigger: refEl.current,
                start: start,
                end: end,
                scrub: scrub,
                markers: markers,
            },
        });



        to?.map(({target, params}) => (timeline.current.to(target, params)));
        from?.map(({target, params}) => (timeline.current.from(target, params)));
        fromTo?.map(({target, from, to}) => (timeline.current.fromTo(target, from, to)));

        return () => {
            gsap.killTweensOf(refEl.current);

            timeline.current?.kill();
        };

    }, [start, end, markers, scrub, to, from]);

    return {
        refEl,
        timeline,
        gsap,
    };
};

export default useGsap;
