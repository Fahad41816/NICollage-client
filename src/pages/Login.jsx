import React, { useContext } from 'react';
import { authContext } from '../context/Authprovider';
import { useNavigate } from 'react-router-dom';

const Login = () => {

 const {loginuser, loginwithgoogle} =  useContext(authContext)

 const navigate = useNavigate()

 const loginWithGoogle = () => {

    loginwithgoogle()

 }

  const loginhandler = (event) => {

    event.preventDefault()
    const email = event.target.email.value
    const password  = event.target.password.value

    loginuser(email, password).then(()=>{
      navigate('/')
    })

  } 

    return (
        
     <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={loginhandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Login
          </button>
        </form>

        <a href="#" className="block mt-4 text-sm text-blue-500 hover:text-blue-600">
          Forgot Password?
        </a>

        <hr className="my-4" />

        <h3 className="text-lg font-semibold">Or login with:</h3>
       
         
        <div className='flex items-center justify-center gap-2'>
          <button className="btn btn-success text-white" onClick={loginWithGoogle}> Login with Google</button>        
          <button className="btn btn-success text-white">  Login with GitHub</button>
        </div>
       
      </div>
    </div>
         
    );
};

export default Login;