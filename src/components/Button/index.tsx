import React from 'react'
import btnStyle from './styles/button.style.scss'

import { Archive } from '../Icon/index'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'primary' | 'info'
    icon?: string
}

export const Button: React.FunctionComponent<IButton> = ({ children, className, color, icon, ...shared }) => {
    const useClassName = className ? className : `${btnStyle.btn} ${btnStyle[`btn-${color}`]}`
    return (
        <button {...shared} className={useClassName}>
            <div className={`${btnStyle['d-flex']}`}>
                {icon ? (
                    <label className={btnStyle['pr-1']}>
                        <Archive />
                    </label>
                ) : (
                    children
                )}
            </div>
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    color: 'primary'
}
