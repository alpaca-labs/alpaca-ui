import React from 'react'
import styled from './styles/button.style.scss'

interface Props {
  onChange?: any
  color?: 'info' | 'primary'
  title?: string
  link?: string
}

const Button = (props: Props) => {
  const { onChange, color, title, link } = props
  return link ? (
    <a
      href={link}
      className={
        props.color
          ? `${styled.btn} ${styled[`btn-${color}`]}`
          : `${styled.btn} ${styled['btn-primary']}`
      }
      onChange={onChange}
    >
      {title}
    </a>
  ) : (
    <button
      className={
        props.color
          ? `${styled.btn} ${styled[`btn-${color}`]}`
          : `${styled.btn} ${styled['btn-primary']}`
      }
      onChange={onChange}
    >
      {title}
    </button>
  )
}

export { Button }
