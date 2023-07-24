import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/image/logo2.png'
import { authContext } from '../../context/Authprovider';

const Navbar = () => {

  const {user, logoutuser} = useContext(authContext)


  const logout = () => {

    logoutuser()

  }




    return (
        <div className=" fixed top-0 left-0 bg-white shadow-lg right-0 z-50 navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               <Link to={"/"}><li><a>Home</a></li></Link> 
               <Link to={"/collage"}><li><a>Collage</a></li></Link> 
               <Link to={"/Addmition"}><li><a>Addmition</a></li></Link> 
               <Link to={"/MyCollage"}><li><a>MY collage</a></li></Link>          
            </ul>
          </div>
          <div className=" text-xl font-bold flex items-center justify-center "> <img className='w-14' src={Logo} alt="" /> NI<span className=' text-2xl text-green-500'>collage</span></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
               <Link to={"/"}><li><a>Home</a></li></Link> 
               <Link to={"/collage"}><li><a>Collage</a></li></Link> 
               <Link to={"/Addmition"}><li><a>Addmition</a></li></Link> 
               <Link to={"/MyCollage"}><li><a>MY collage</a></li></Link>         
          </ul>
        </div>
        <div className="navbar-end">
        {
          user ? <button onClick={logout} className="btn btn-success text-white">log out</button> : <Link to={"/login"}><button className="btn btn-success text-white">login</button></Link>
        }
        
        { 
          user && <div className='ml-5'>
          <img className=' rounded-full w-16 h-16 ' src={user.photoURL} alt="" />
        </div>
        }
        
         
        </div>
      </div>
    );
};

export default Navbar;