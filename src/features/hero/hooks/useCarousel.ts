import { useState, useEffect } from 'react';

/**
 * Custom hook for managing an image carousel with a timer.
 * @param images Array of image URLs.
 * @param interval Duration in milliseconds between image changes.
 * @returns Object containing currentImageIndex and setCurrentImageIndex.
 */
export const useCarousel = (images: string[], interval: number = 5000) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const intervalId = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [images.length, interval]);

    return { currentImageIndex, setCurrentImageIndex };
};
