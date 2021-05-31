import React, { useState } from 'react'
import Button from '../../components/forms/button/button'
import FormWrapper from '../../components/forms/form-wrapper/form-wrapper'
import TextInput from '../../components/forms/text-input/text-input'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (

    <FormWrapper greeting='Welcome back!'
      description='Login to continue.'
      loginOption={`Sign up to start using Simpledo today.`}
    >
      <TextInput
        name="fullname"
        type="text"
        label="Full Name"
        value={email}
        required
      />
      <TextInput
        name="email"
        type="email"
        label="Email"
        value={email}
        required
      />
      <TextInput
        name="password"
        type="password"
        label="Password"
        value={email}
        required
      />
      <p>Don't have an account? Signup</p>
      <div>
        <Button
          label='Sign up'
          customStyle='googleSignInStyles'
        />
      </div>
    </FormWrapper>
  )
}

export default Login
