import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../context/Authprovider';




const Registation = () => {
    
    const {createUser, AddUserNameAndPhoto} = useContext(authContext)
    const navigate = useNavigate()

    const singuphandeler = (event) =>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const Name = event.target.Name.value
        const photo = event.target.photo.value
       

        createUser(email,password).then(()=> {
            AddUserNameAndPhoto(Name, photo).then(()=>{
                navigate('/')
            }).catch(err => console.log(err))
                         
        }).catch(err => console.log(err))

    }

    return (
        <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sing up</h2>
        <form onSubmit={singuphandeler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Photo url:
            </label>
            <input
              type="text"
              id="name"
              name="photo"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
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
          Sing up
          </button>
        </form>

        <Link to={'/login'} href="#" className="block mt-4 text-sm text-blue-500 hover:text-blue-600">
         have account? login
        </Link>
 
       
      </div>
    </div>
    );
};

export default Registation;