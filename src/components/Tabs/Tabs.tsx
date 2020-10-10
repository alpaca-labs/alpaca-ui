import React, { Children, cloneElement, useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

const duration = 100;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(-5px)' },
  entered: { opacity: 1 },
  exiting: { opacity: 0, transform: 'translateY(5px)', position: 'absolute', top: 0, left: 0, width: '100%', height: 0 },
}


const Tabs = ({ onClick, children, activeKey }: any) => {
  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [indicatorPosition, setIndicatorPosition] = useState(0)
  const nodeRef: any = useRef();

  return (
    <div className="AuiTabs-root">
      <nav className="AuiTabNav">
        {Children.map(children, (child, i) =>
          child ?
            cloneElement(child, {
              index: i,
              onClick: child.props?.onClick ?? onClick,
              active: child.props?.active ?? activeKey === i,
              setIndicatorPosition: setIndicatorPosition,
              setIndicatorWidth: setIndicatorWidth
            })
            :
            null
        )}
        <span
          style={{
            left: indicatorPosition,
            width: indicatorWidth
          }}
          className="AuiTabIndicator"
        />
      </nav>
      <div className="AuiTabContent">
        {Children.map(children, (child, i) =>
          child ?
            <Transition
              nodeRef={nodeRef}
              in={child.props?.active ?? activeKey === i}
              timeout={duration}
              appear={true}
              unmountOnExit
            >
              {(state: any) =>
                <div
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                  ref={nodeRef}
                >
                  {child.props.children}
                </div>
              }
            </Transition>
            :
            null
        )}
      </div>
    </div>
  )
}

export { Tabs }
