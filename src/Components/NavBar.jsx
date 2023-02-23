import React, { useState } from 'react'
import { Login } from './Pages/Page Components/Login';
import { Register } from './Pages/Page Components/Register';

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

  return (
    <div>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 mb-3">
         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
           <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
             <a className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                Trugle Calendar: Meets Commune
             </a>
           </div>
           <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
             <ul className="flex flex-col lg:flex-row list-none ml-auto">
                 <li className="nav-item">
                   <a onClick={() => {toggleForm('login', 'Login'); setShowModal(true);}} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                     Login
                   </a>
                  </li>
                  <li className="nav-item">
                   <a onClick={() => {toggleForm('register', 'Sign Up'); setShowModal(true)}} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                     Sign Up
                   </a>
                 </li>
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
             </ul>
           </div>
         </div>
        </nav>
    </div>
  )
}

export default NavBar