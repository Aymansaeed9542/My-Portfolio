import React, { useState, useRef, useEffect } from 'react';

export default function LazyImage({ 
    src, 
    alt, 
    className = "", 
    width, 
    height, 
    loading = "lazy",
    ...props 
}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading={loading}
                    onLoad={handleLoad}
                    className={`transition-opacity duration-300 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    {...props}
                />
            )}
            {!isLoaded && isInView && (
                <div 
                    className="absolute inset-0 bg-gray-800 animate-pulse"
                    style={{ width, height }}
                />
            )}
        </div>
    );
}
