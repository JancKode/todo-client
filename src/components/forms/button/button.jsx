import React from 'react'

import './button.styles.scss'

const Button = ({ type, value, onClick, customStyle, label }) => {
  return (
    <button className={`button ${customStyle}`}>
      <span className="button-label">{label}</span>
    </button>
  )
}

export default Button
