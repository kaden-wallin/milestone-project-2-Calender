import React, { useState, useEffect } from 'react'
import { Login } from './Pages/Page Components/Login';
import { Register } from './Pages/Page Components/Register';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function NavBar(props) {
  const [showModal, setShowModal] = useState(false);
  const [currentForm, setCurrentForm] = useState('login');
  const [showForm, setShowForm] = useState(true);
  const [modalText, setModalText] = useState(true);


  const toggleForm= (formName) => {
    setCurrentForm(formName)
    setShowForm(true)
    setModalText(formName === 'login' ? true : false);
  }

  const modalTitle = modalText ? 'Login' : 'Sign Up';

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setShowModal(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown);
})

  return (
    <div>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-100 mb-3">
         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
           <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <Link to='/calender'>
             <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-red-600 hover:transform hover:scale-110 transition duration-300">
                Trugle Calendar: Meets Commune
             </a>
            </Link>
           </div>
           <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
             <ul className="flex flex-col lg:flex-row list-none ml-auto space-x-2" >
                 <li className="nav-item my-2">
                   <Button onClick={() => {toggleForm('login', 'Login'); setShowModal(true);}} className="px-5 py-3 flex items-center text-s uppercase font-bold leading-snug bg-red-600 text-white hover:opacity-75">
                     Login
                   </Button>
                  </li>
                  <li className="nav-item my-2">
                   <Button onClick={() => {toggleForm('register', 'Sign Up'); setShowModal(true)}} className="px-4 py-3 flex items-center text-s uppercase font-bold leading-snug bg-red-600 text-white hover:opacity-75">
                     Sign Up
                   </Button>
                 </li>
             </ul>
                      {showModal ? (
                        <>
                          <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                          >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                                  <h3 className="text-3xl font-semibold">
                                    {modalTitle}
                                  </h3>
                                  <h1 onClick={() => setShowModal(false)} className='justify-end text-3xl font-semibold' style={{ marginLeft: "auto" }}>
                                    x
                                    </h1>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                {showForm &&
                                  (currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />)
                                 }
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
           </div>
         </div>
        </nav>
    </div>
  )
}

export default NavBar