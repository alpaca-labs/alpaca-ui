import React from 'react'

export const Archive: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
    <svg
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}
    >
        <polyline points='21 8 21 21 3 21 3 8' />
        <rect x={1} y={3} width={22} height={5} />
        <line x1={10} y1={12} x2={14} y2={12} />
    </svg>
)

export const Activity: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        {...props}
    >
        <polyline points='22 12 18 12 15 21 9 3 6 12 2 12'></polyline>
    </svg>
)
