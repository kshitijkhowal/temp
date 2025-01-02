import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Signup = () => {
    return (
        <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
            <div className='w-[600px] '>
                <div className="modal-box dark:bg-slate-900 dark:text-white dark:border ">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg mb-6">Signup</h3>
                    {/* fullname */}
                    <div className='mt-3 space-y-3'>
                        <span>Name</span> <br />
                        <input
                            type="text"
                            placeholder='Enter your fullname'
                            className='w-80 p-3 border rounded-md outline-none'
                        />
                    </div>
                    {/* email */}
                    <div className='mt-3 space-y-3'>
                        <span>Email</span> <br />
                        <input
                            type="email"
                            placeholder='Enter your email'
                            className='w-80 p-3 border rounded-md outline-none'
                        />
                    </div>
                    {/* password */}
                    <div className='mt-3 space-y-3'>
                        <span>Password</span> <br />
                        <input
                            type="text"
                            placeholder='Enter your password'
                            className='w-80 p-3 border rounded-md outline-none'
                        />
                    </div>
                    {/* signup btn */}
                    <div className='flex justify-between mt-8'>
                        <button className='bg-[#FF00D3] text-white rounded-md px-4 py-3 hover:bg-pink-400 duration-200 cursor-pointer'>Signup</button>
                        <p className='text-[18px] py-3 cursor-pointer '>Have account ? {" "}
                            <button className='underline text-blue-500 cursor-pointer'
                                onClick={()=> document.getElementById("my_modal_3").showModal()}
                            >
                                Login
                            </button>
                            <Login/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup