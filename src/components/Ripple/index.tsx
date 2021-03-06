import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import clsx from 'clsx'

const useDebouncedRippleCleanUp = (rippleCount: number, cleanUpFunction: () => void) => {
  useEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, 400);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, cleanUpFunction]);
};

interface Props {
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
}

const Ripple = forwardRef(({ color }: Props, ref: any) => {
  const [rippleArray, setRippleArray]: any[] = useState([])

  useDebouncedRippleCleanUp(rippleArray.length, () => {
    setRippleArray([])
  })

  useImperativeHandle(ref, () => ({
    addRipple(event: any) {
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
    <div className="AuiRipple-root">
      {rippleArray.length > 0 &&
        rippleArray.map((ripple: any, index: any) => {
          return (
            <span
              className={clsx(
                color && `AuiRipple-${color}`
              )}
              key={'spanRipple' + index}
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
