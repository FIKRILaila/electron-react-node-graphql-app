import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'

const REGISTER_USER = gql`
mutation Register($input: registerInput) {
  register(input: $input)
}
`

export const Register = () => {
  const navigate = useNavigate();
  const [registerData, setregisterData] = useState({
    email : '',
    password : '',
    username : '',
  })
  const [registerUser,{data}] = useMutation(REGISTER_USER,{
    onCompleted(data){
      navigate('/login', { replace: true })
    }
  })
  const Register = () => {
    registerUser({ variables :{
      input: {
        email: registerData.email,
        password: registerData.password,
        username: registerData.username
      }
    }})
  }

  return (
    <div className="relative font-medium md:h-screen flex items-center content-center">
        <div className="mr-auto ml-auto w-full">
          <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 text-center">
            <h1 className="text-gray-800 block text-3xl font-extrabold font-title">Sign up</h1>
          </div>
          <div className="w-full max-w-md mr-auto ml-auto mt-4">
            <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username"> Username </label>
                <input onChange={(e) => {setregisterData({...registerData,username:e.target.value})}} className="shadow-sm appearance-none border border-gray-300 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-sky-600" id="username" type="text" placeholder="username"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username"> Email
                  address </label>
                <input onChange={(e) => {setregisterData({...registerData,email:e.target.value})}} className="shadow-sm appearance-none border border-gray-300 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-sky-600" id="username" type="email" placeholder="enter your email adress"/>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username"> Password </label>
                <input onChange={(e) => {setregisterData({...registerData,password : e.target.value})}} className="shadow-sm appearance-none border border-gray-300 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-sky-600" id="password" type="password" placeholder="***************"/>
              </div>
              <div className="mb-6">
                <button onClick={Register}  type="button" className="bg-sky-600 hover:bg-sky-700 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all">
                  Sign up
                </button>
              </div>
              <div className='mb-6'>
                <p className="text-center text-gray-500 text-sm"> Already have an account? <Link to="/login" className='text-sky-600'>Sign in</Link> </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-0 mb-6">
                <hr className="mt-3 hidden sm:block border-gray-400"/>
                <span className="text-center bg-white text-sm text-gray-700 font-normal">Or continue with</span>
                <hr className="mt-3 hidden sm:block border-gray-400"/>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button type="button" className="relative border-solid border shadow-sm border-gray-400
                              font-semibold text-gray-600 text-sm py-1rounded text-center w-full
                              focus:outline-none hover:border-sky-600 transition-all duration-200">
                  <i className="fab fa-google text-lg"></i>
                </button>
                <button type="button" className="relative border-solid border shadow-sm border-gray-400
                              font-semibold text-gray-600 text-sm py-1 px-0 rounded text-center w-full
                              focus:outline-none hover:border-sky-600 transition-all duration-200">
                  <i className="fab fa-twitter text-lg"></i>
                </button>
                <button type="button" className="relative border-solid border shadow-sm border-gray-400
                              font-semibold text-gray-600 text-sm py-1 px-0 rounded text-center w-full
                              focus:outline-none hover:border-sky-600 transition-all duration-200">
                  <i className="fab fa-linkedin text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
