import React, { useState } from 'react'
import './SignUP.css'
import { Link } from 'react-router-dom'
import { IoIosEyeOff, IoMdEye } from 'react-icons/io'

const SignUP = () => {
    // =============================== useStates
    const [form,setForm]   = useState({email:'',password: '',name:'',})
    const [error,setError] = useState({emailError:'',passwordError: '',nameError:'',})
    const [eye,setEye]     = useState(false)


    let handleSubmit = (e)=>{
        e.preventDefault()
        if(form.name == ''){
            setError((prev)=>({...prev,nameError:'Please enter your Name'}))
            setError((prev)=>({...prev,emailError:''}))
            setError((prev)=>({...prev,passwordError:''}))
        }
        else if(form.email == ''){
            setError((prev)=>({...prev,emailError:'Please enter your Email'}))
            setError((prev)=>({...prev,nameError:''}))
            setError((prev)=>({...prev,passwordError:''}))
        }
        else if(form.password == ''){
            setError((prev)=>({...prev,passwordError:'Please enter your Password'}))
            setError((prev)=>({...prev,nameError:''}))
            setError((prev)=>({...prev,emailError:''}))
        }
    }



  return (
    <section id='SignUpBar'>
        <div className="sign_row">
            <div className="sign_image">
                <img src="images/ballon.png" alt="Ballon" />
            </div>
            <div className="main_signUp">
                <h2>Create your Free Account</h2>
                <form action="">
                    <div className='flex flex-col gap-[41px]'>
                        <div className="user_box">
                            <label>Full Name</label>
                            <input onChange={(e)=>{setForm((prev)=>({...prev,name:e.target.value})),setError((prev)=>({...prev,nameError:''}))}} type="text" placeholder='Enter your Fulll Name here' />
                            <span className="error text-red-500">{error.nameError}</span>
                        </div>
                        <div className="user_box">
                            <label>Email</label>
                            <input onChange={(e)=>{setForm((prev)=>({...prev,email:e.target.value})),setError((prev)=>({...prev,emailError:''}))}} type="email" placeholder='Enter your Email here' />
                            <span className="error text-red-500">{error.emailError}</span>
                        </div>
                        <div className="user_box relative">
                            <label>Password</label>
                            <input onChange={(e)=>{setForm((prev)=>({...prev,password:e.target.value})),setError((prev)=>({...prev,passwordError:''}))}} type={eye?'text':'password'} placeholder='Enter your Password here' />
                            {
                                eye?
                                <IoMdEye onClick={()=>setEye(false)}  className='text-[25px] absolute right-3 top-[65%] translate-y-[-50%] cursor-pointer' />
                                :
                                <IoIosEyeOff onClick={()=>setEye(true)} className='text-[25px] absolute right-3 top-[65%] translate-y-[-50%] cursor-pointer' />
                            }
                            <span className="error text-red-500">{error.passwordError} </span>
                        </div>
                    </div>
                    <button onClick={(e)=>handleSubmit(e)}>Create Account</button>
                    <p>Already have a account? <Link to={'#'}>Log in</Link></p>
                </form>
                <div className="or">
                    <h3>- OR -</h3>
                    <div className='flex gap-[81px]'>
                        <div className="others">
                            <Link to={'#'}>
                                <img src="images/google.png" alt="" />
                                <p>Sing up with Google</p>
                            </Link>
                        </div>
                        <div className="others">
                            <Link to={'#'}>
                                <img src="images/GitHub.png" alt="" />
                                <p>Sing up with GitHub</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='mt-[84px]'>Reserved directs to Leo Barreto</p>
            </div>  
        </div>
    </section>
  )
}

export default SignUP