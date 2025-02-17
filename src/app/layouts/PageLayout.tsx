"use client";

import { PropsWithChildren, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import Navbar from "@/app/components/navigation/Navbar";
import Footer from "@/app/components/navigation/Footer";

const PageLayout = ({ children }: PropsWithChildren) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        const lenis = new Lenis({
            duration: 2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Cleanup on component unmount
        };
    }, []);

    return (
        <div className="pageLayout">
            <Navbar />
            <div className="App">{children}</div>
            <Footer />
        </div>
    );
};

export default PageLayout;
