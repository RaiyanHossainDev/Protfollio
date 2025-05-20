import React from 'react'
import { big, montserrat } from '../layout'
import Form from '../Componets/Form/Form'

const page = () => {

  return (
    <div>
        <section className='pt-[200px] pb-[200px]'>
            <div className="container mx-auto">
                <div>
                    <h2 className='text-[20px] text-[#5be0fd] w-[356px] ml-[100px]'>Step into the future with innovation that redefines possibilities—because you deserve nothing but the best!</h2>
                    <h1 className={`text-[114px] text-[white] text-center ${montserrat.className}`}>Get In Touch</h1>
                    <div className='flex justify-end'><h3 className={`py-[10px] px-[15px] rounded-[10px] bg-[#5be0fd] text-white ${big.className} text-3xl mr-[150px] `}>respond in 2 business days</h3></div>
                </div>
            </div>
        </section>
        <Form/>
    </div>
  )
}

export default page