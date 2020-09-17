import React, { useEffect, useRef } from 'react';
import styles from "./styles/tabs.style.scss";
import clsx from 'clsx';

const Tab = ({
  onClick,
  title,
  index,
  active,
  setIndicatorPosition,
  setIndicatorWidth
}:any) => {
    const tabRef:any = useRef<any | null>();

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
        styles.tabWrapper,
        active && styles.active
      )}
    >
      <button
        onClick={() => onClick(index)}
        className={styles.tabTitle}
        title={title}
      >
        {title}
      </button>
    </div>
  )
}


export { Tab }