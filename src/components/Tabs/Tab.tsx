import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

const Tab = ({
  onClick,
  title,
  index,
  active,
  setIndicatorPosition,
  setIndicatorWidth
}: any) => {
  const tabRef: any = useRef<any | null>();

  useEffect(() => {
    if (active) {
      setIndicatorWidth(tabRef.current.clientWidth)
      setIndicatorPosition(tabRef.current.offsetLeft)
    }
  }, [active, setIndicatorPosition, setIndicatorWidth])

  return (
    <div
      ref={tabRef}
      className={clsx(
        "AuiTabWrapper",
        active && "active"
      )}
    >
      <button
        onClick={() => onClick(index)}
        className="AuiTabTitle"
        title={title}
      >
        {title}
      </button>
    </div>
  )
}


export { Tab }
