import React from 'react'

const Archive: React.StatelessComponent<React.SVGAttributes<SVGElement>> = (props) => (
    <svg
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-archive'
        {...props}
    >
        {console.log(props)}
        <polyline points='21 8 21 21 3 21 3 8' />
        <rect x={1} y={3} width={22} height={5} />
        <line x1={10} y1={12} x2={14} y2={12} />
    </svg>
)
export { Archive }
