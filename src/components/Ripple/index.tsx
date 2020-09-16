import clsx from 'clsx'
import React, { useState, useLayoutEffect, forwardRef, useImperativeHandle } from 'react'
import styles from './styles/ripple.style.scss'

const useDebouncedRippleCleanUp = (rippleCount:any, duration:any, cleanUpFunction:any) => {
    useLayoutEffect(() => {
        let bounce:any = null
        if (rippleCount > 0) {
            clearTimeout(bounce)

            bounce = setTimeout(() => {
                cleanUpFunction()
                clearTimeout(bounce)
            }, duration)
        }

        return () => clearTimeout(bounce)
    }, [rippleCount, duration, cleanUpFunction])
}

const Ripple = forwardRef(({ duration = 400, color }:any, ref) => {
    const [rippleArray, setRippleArray]:any = useState([])

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([])
    })

    useImperativeHandle(ref, () => ({
        addRipple(event:any) {
            const rippleContainer = event.currentTarget.getBoundingClientRect()
            const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height
            const x = event.pageX - rippleContainer.x - size / 2
            const y = event.pageY - rippleContainer.y - size / 2
            const newRipple = {
                x,
                y,
                size
            }
            setRippleArray([...rippleArray, newRipple])
        }
    }))

    return (
        <div className={styles.rippleRoot}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple:any, index:any) => {
                    return (
                        <span
                            className={clsx(
                                color === 'primary' && styles.ripplePrimary,
                                color === 'secondary' && styles.rippleSecondary
                            )}
                            key={'span' + index}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.size,
                                height: ripple.size
                            }}
                        />
                    )
                })}
        </div>
    )
})

export { Ripple }
