import clsx from 'clsx';
import React, { Children, cloneElement } from 'react';
import styles from './styles/selectableCards.style.scss';

interface ISelectableCard{
  className: string
  children: any
  selectedValue: any
  onClick: any
  variant:string
}

const SelectableCards = ({
  className,
  children,
  selectedValue,
  onClick,
  variant
}:ISelectableCard) => {
  return (
    <div className={clsx(
      styles.selectableCards,
      className
    )}>
      {Children.map(children, child =>
        child ?
          cloneElement(child, {
            className: child.props?.className,
            variant: child.props?.variant ?? variant,
            active: selectedValue === child.props?.value,
            onClick: onClick,
            children: child.props?.children
          })
          :
          null
      )}
    </div>
  )
}

export { SelectableCards};
