import React from 'react'

import checkIcon from '../../../assets/icons/check.svg'
import Button from '../button/button'
import './form-wrapper.styles.scss'

const FormWrapper = ({ children, greeting = 'Welcome', description = 'Sign up to start using Simpledo today.', loginOption }) => {
  return (
    <div className='form'>
      <img src={checkIcon} alt='check icon' />
      <span className='form-greeting'>{greeting}</span>
      <span className='form-description' >{description}</span>
      {children}
      <p className='loginOption'>{loginOption}</p>
      <div className='form-button'>
        <Button
          label='Sign up'
          customStyle='googleSignInStyles'
        />
      </div>
    </div>
  )
}

export default FormWrapper;