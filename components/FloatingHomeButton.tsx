import React, { useState, useEffect, useRef } from 'react';
import { HomeIcon } from './Icons';

const FloatingHomeButton: React.FC = () => {
    const [position, setPosition] = useState({ x: 20, y: 20 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // Initial position: Bottom Right
        setPosition({
            x: window.innerWidth - 80,
            y: window.innerHeight - 80
        });

        const handleResize = () => {
            // Keep within bounds on resize
            setPosition(prev => ({
                x: Math.min(prev.x, window.innerWidth - 80),
                y: Math.min(prev.y, window.innerHeight - 80)
            }));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        const rect = buttonRef.current?.getBoundingClientRect();
        if (rect) {
            setDragOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            const newX = e.clientX - dragOffset.x;
            const newY = e.clientY - dragOffset.y;

            // Boundary constraints
            const maxX = window.innerWidth - 60; // Button width + buffer
            const maxY = window.innerHeight - 60;

            setPosition({
                x: Math.max(10, Math.min(newX, maxX)),
                y: Math.max(10, Math.min(newY, maxY))
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    // Touch support for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        const touch = e.touches[0];
        const rect = buttonRef.current?.getBoundingClientRect();
        if (rect) {
            setDragOffset({
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            });
        }
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (isDragging) {
            e.preventDefault(); // Prevent scrolling while dragging
            const touch = e.touches[0];
            const newX = touch.clientX - dragOffset.x;
            const newY = touch.clientY - dragOffset.y;

            const maxX = window.innerWidth - 60;
            const maxY = window.innerHeight - 60;

            setPosition({
                x: Math.max(10, Math.min(newX, maxX)),
                y: Math.max(10, Math.min(newY, maxY))
            });
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const element = buttonRef.current;
        if (element) {
            element.addEventListener('touchmove', handleTouchMove as any, { passive: false });
            element.addEventListener('touchend', handleTouchEnd);
        }
        return () => {
            if (element) {
                element.removeEventListener('touchmove', handleTouchMove as any);
                element.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [isDragging, dragOffset]);


    const handleClick = (e: React.MouseEvent) => {
        // Only scroll if not dragging (simple check: did we move much?)
        if (!isDragging) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <button
            ref={buttonRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onClick={handleClick}
            className={`fixed z-50 p-4 rounded-full bg-gradient-to-r from-accent-1 to-accent-2 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] cursor-move flex items-center justify-center glowing-edge backdrop-blur-md border border-white/20`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                touchAction: 'none' // Important for mobile drag
            }}
            title="Drag me! Click to return Home."
        >
            <HomeIcon className="w-6 h-6 pointer-events-none" />
        </button>
    );
};

export default FloatingHomeButton;
