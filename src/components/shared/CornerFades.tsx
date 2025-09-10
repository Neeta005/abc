'use client';
import React from 'react';

export default function SmoothCornerFades({
    children,
    zValue = 0,
}: {
    children: React.ReactNode;
    zValue?: number;
}) {
    return (
        <div className="relative min-h-screen overflow-hidden ">
            <div
                aria-hidden="true"
                className={`pointer-events-none fixed top-0 right-0 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] z-[${zValue}]`}
                style={{
                    background: `radial-gradient(
            circle at top right,
            rgba(255,171,67,0.18),
            rgba(255,171,67,0.1) 40%,
            rgba(255,255,255,0) 80%
          )`,
                }}
            />

            <div
                aria-hidden="true"
                className={`pointer-events-none fixed bottom-0 left-0 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] z-[${zValue}]`}
                style={{
                    background: `radial-gradient(
            circle at bottom left,
            rgba(255,171,67,0.18),
            rgba(255,171,67,0.1) 40%,
            rgba(255,255,255,0) 80%
          )`,
                }}
            />

            {children}
        </div>
    );
}
