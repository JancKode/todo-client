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
      loginOption={`Don't have an account? Sign up`}
    >
      <TextInput
        name="email"
        type="text"
        label="Email"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        name="password"
        type="password"
        label="Password"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
        required
      />
    </FormWrapper>
  )
}

export default Login
