import React from 'react'

const New = () => {
  return (
    <div id='new' className='mt-[100px]'>
        <div className="container mx-auto">
            <div className="new_col flex flex-col items-center gap-[20px]">
                <h2 className='text-[32px] text-[white] w-[616px] text-center'>I’d love to collaborate on your next project! Let’s bring your ideas to life.</h2>
                <a href="mailto:astralfog2@gmail.com" className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#5be0fd] text-[white] shadow hover:bg-[#5be0fd] h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out cursor-pointer">
                    <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-[white] opacity-30 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
                    <div className="flex items-center">
                        <span className="ml-1 text-white text-[18px]">Start fresh project</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default New