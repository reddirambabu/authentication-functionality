// Write your JS code here

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

const Login = props => {
  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return <Redirect to="/" />
  }

  const onSubmitSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const onClickLogin = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const obj = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(obj),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    }
  }

  //   const jwtToken = Cookies.get('jwt_token')
  //   if (jwtToken !== undefined) {
  //     return <Redirect to="/" />
  //   }

  return (
    <div>
      <h1 className="heading">Please Login</h1>
      <button type="button" className="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
