import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";   // react hook form


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div >
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg mb-6">Login</h3>
                        {/* email */}
                        <div className='mt-3 space-y-3 '>
                            <span>Email</span> <br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='w-80 p-3 border rounded-md outline-none dark:text-black'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500 py-4'>This field is required</span>}
                        </div>
                        {/* password */}
                        <div className='mt-3 space-y-3'>
                            <span>Password</span> <br />
                            <input
                                type="text"
                                placeholder='Enter your password'
                                className='w-80 p-3 border rounded-md outline-none dark:text-black'
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-500 py-4'>This field is required</span>}
                        </div>
                        {/* login btn */}
                        <div className='flex justify-between mt-8'>
                            <button className='bg-[#FF00D3] text-white rounded-md px-4 py-3 hover:bg-pink-400 duration-200 cursor-pointer'>Login</button>
                            <p className='text-[18px]  py-3 cursor-pointer'>Not registered ? {" "} <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login