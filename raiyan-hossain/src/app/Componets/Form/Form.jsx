'use client'
import React, { useState } from 'react'
import './Form.css'
import { push, ref, set } from "firebase/database";
import { db } from '../../lib/firebase.config';
import { Bounce, toast } from 'react-toastify';


const Form = () => {
    const [data,setData] = useState({country:'',fullName:'',phone:'',email:'',msg:'',})
    const [option,setOption] = useState('')
    const [error,setError] = useState(false)

    let handleWrite = (e)=>{
        e.preventDefault()
        if (data.country == '') {
            setError(true)
        }else if (data.fullName == '') {
            setError(true)
        }else if (data.phone == '') {
            setError(true)
        }else if (data.email == '') {
            setError(true)
        }else if (data.msg == '') {
            setError(true)
        }else if (option == '') {
            setError(true)
        }else{
            setData(()=>({country:"",fullName:"",phone:"",email:"",msg:""}))
            setOption('')
            toast.success('Messege sent to Raiyan!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            set(push(ref(db,'clientContacts/'),{
                country: data.country,
                fullName: data.fullName,
                phone: data.phone,
                email: data.email,
                messege: data.msg,
                interest: option,
            }))
        }
    }
  return (
    <section id='form'>
        <div className="container mx-auto">
            <div className="holder">
                <div className="form">
                    <div className="chose">
                        <h2>Choose your favorite</h2>
                        <div className="selection">
                            <span className={option === 'Full-Stack Web Apps'?'text-[#5be0fd] bg-[white] border-[white]':'text-[white]'} onClick={(e)=>{option === e.target.textContent?setOption(''):setOption(e.target.textContent),setError(false)}}>Full-Stack Web Apps</span>
                            <span className={option === 'Admin Dashboards'?'text-[#5be0fd] bg-[white] border-[white]':'text-[white]'} onClick={(e)=>{option === e.target.textContent?setOption(''):setOption(e.target.textContent),setError(false)}}>Admin Dashboards</span>
                            <span className={option === 'Portfolio Websites'?'text-[#5be0fd] bg-[white] border-[white]':'text-[white]'} onClick={(e)=>{option === e.target.textContent?setOption(''):setOption(e.target.textContent),setError(false)}}>Portfolio Websites</span>
                            <span className={option === 'News or Blog Sites'?'text-[#5be0fd] bg-[white] border-[white]':'text-[white]'} onClick={(e)=>{option === e.target.textContent?setOption(''):setOption(e.target.textContent),setError(false)}}>News or Blog Sites</span>
                            <span className={option === 'E-commerce Sites'?'text-[#5be0fd] bg-[white] border-[white]':'text-[white]'} onClick={(e)=>{option === e.target.textContent?setOption(''):setOption(e.target.textContent),setError(false)}}>E-commerce Sites</span>
                            <span className={option === 'Others'?'text-[#5be0fd] bg-[white] border-[white]':'text-[white]'} onClick={(e)=>{option === e.target.textContent?setOption(''):setOption(e.target.textContent),setError(false)}}>Others</span>
                        </div>
                    </div>
                    <form action="">
                        <h2>FILL THIS FORM OUT</h2>
                        <div className="mb-4">
                            <input value={data.fullName} onChange={(e)=>{setData(prev=>({...prev,fullName:e.target.value})),setError(false)}} className="w-[620px] px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5be0fd] transition duration-300" placeholder="Full Name" type="text" />
                        </div>
                        <div className='flex gap-5'>
                            <div className="mb-4">
                                <input value={data.email} onChange={(e)=>{setData(prev=>({...prev,email:e.target.value})),setError(false)}} className="w-[300px] px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5be0fd] transition duration-300" placeholder="Email" type="text" />
                            </div>
                            <div className="mb-4">
                                <input value={data.phone} onChange={(e)=>{setData(prev=>({...prev,phone:e.target.value})),setError(false)}} className="w-[300px] px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5be0fd] transition duration-300" placeholder="Phone" type="text" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <input value={data.country} onChange={(e)=>{setData(prev=>({...prev,country:e.target.value})),setError(false)}} className="w-[620px] px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5be0fd] transition duration-300" placeholder="Country" type="text" />
                        </div>
                        <textarea value={data.msg} onChange={(e)=>{setData(prev=>({...prev,msg:e.target.value})),setError(false)}} className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5be0fd] transition duration-300" rows={4} placeholder="Enter your message" name="message" id="message" defaultValue={""} />
                        {
                            error&&
                            <p className='text-[18px] text-[red] text-center'>Fill the full Form.</p>
                        }
                        <button onClick={handleWrite} className="w-full mt-[20px] cursor-pointer bg-[#5be0fd] text-gray-800 py-2 px-4 rounded-lg hover:bg-[#74e5ff] transition duration-300" type="submit">
                            Send it Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Form