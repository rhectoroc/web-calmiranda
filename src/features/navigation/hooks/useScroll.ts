import { useState, useEffect } from 'react';

/**
 * Custom hook to track if the window has been scrolled past a threshold.
 * @param threshold The number of pixels to scroll before triggering the state change.
 * @returns boolean indicating if the scroll threshold has been met.
 */
export const useScroll = (threshold: number = 50): boolean => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return isScrolled;
};
