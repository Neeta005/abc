import React from 'react';

export default function HomeHumbergerSvg({ onClick }: { onClick: () => void }) {
    return (
        <svg
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler cursor-pointer icons-tabler-outline icon-tabler-menu h-5 w-5"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8l16 0" />
            <path d="M4 16l16 0" />
        </svg>
    );
}
