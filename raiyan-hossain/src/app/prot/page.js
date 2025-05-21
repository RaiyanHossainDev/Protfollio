import React from 'react'

const page = () => {
  return (
    <section className="min-h-screen  text-white pt-40 pb-16 px-6 container mx-auto">
      <div className="banner flex justify-center w-full">
        <div className="relative w-[1200px] rounded-2xl overflow-hidden group shadow-xl mx-auto">
          {/* Background image */}
          <img className='w-full h-full object-cover' src="/videos/chatingapp.gif" alt="" />
          {/* Gradient + blur overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-indigo-900/40 to-transparent backdrop-blur-[3px] transition-all duration-500 group-hover:from-indigo-800/60 group-hover:via-purple-700/40 group-hover:to-transparent" />

          {/* Hidden content that appears on hover */}
          <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            <h1 className="text-[#46ff46] text-4xl font-extrabold drop-shadow-md">
              GoChill
            </h1>
            <p className="text-white text-lg mt-2 opacity-90 max-w-md">
              A beutifull and well organized chatting app to chat with friends.
            </p>
            <a href='https://gochill-ps2t56um0-raiyanhossaindevs-projects.vercel.app' target='_blank' className="mt-5 cursor-pointer px-5 py-2 bg-white/20 hover:bg-white/30 text-cyan-400 font-medium rounded-full backdrop-blur-md transition">
              View live demo
            </a>
          </div>
        </div>
      </div>

      {/* =-=-=-=-=-=-=-=-=-=-= */}

      

        <div className="max-w-6xl mx-auto mt-[100px] ">
          <h2 className="text-4xl font-extrabold mb-12 relative inline-block text-white">
            More Projects
            <span className="absolute left-0 bottom-[-6px] w-1/2 h-1 bg-cyan-400 animate-pulse rounded"></span>
          </h2>

          <div className='flex gap-[40px]'>
            <div className="">
              <div className="group bg-white/5 border border-cyan-500 rounded-2xl p-5 backdrop-blur-md hover:scale-[1.02] transition-transform shadow-lg hover:shadow-cyan-500/30">
                <img src="/images/nature.png" width={300} alt="" className='rounded-lg' />
                <h3 className="text-xl font-semibold mb-2">Nature</h3>
                <p className="text-sm text-gray-300 mb-4 w-[300px]">
                  A nature themed website to encourage peoples to plant trees.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-cyan-200">
                  <span className="bg-cyan-800/50 px-2 py-1 rounded">React</span>
                  <span className="bg-cyan-800/50 px-2 py-1 rounded">Tailwind</span>
                </div>
                <div className="mt-4 flex justify-between text-sm text-cyan-400">
                  <a href="https://github.com/RaiyanHossainDev/Protfollio/tree/main/nature" target='_blank' className="hover:underline">GitHub →</a>
                  <a href="https://nature-dun.vercel.app/" target='_blank' className="hover:underline">Live Demo →</a>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="">
              <div className="group bg-white/5 border border-cyan-500 rounded-2xl p-5 backdrop-blur-md hover:scale-[1.02] transition-transform shadow-lg hover:shadow-cyan-500/30">
                <img src="/images/furniture.png" width={300} alt="" className='rounded-lg' />
                <h3 className="text-xl font-semibold mb-2">Furniture</h3>
                <p className="text-sm text-gray-300 mb-4 w-[300px]">
                  A well responsive landing page.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-cyan-200">
                  <span className="bg-cyan-800/50 px-2 py-1 rounded">React</span>
                  <span className="bg-cyan-800/50 px-2 py-1 rounded">Tailwind</span>
                </div>
                <div className="mt-4 flex justify-between text-sm text-cyan-400">
                  <a href="https://github.com/RaiyanHossainDev/Projects/tree/main/Project%203%20Furniture" target='_blank' className="hover:underline">GitHub →</a>
                  <a href="https://projects-ny3jq3exo-raiyanhossaindevs-projects.vercel.app/" target='_blank' className="hover:underline">Live Demo →</a>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="">
              <div className="group bg-white/5 border border-cyan-500 rounded-2xl p-5 backdrop-blur-md hover:scale-[1.02] transition-transform shadow-lg hover:shadow-cyan-500/30">
                <img src="/images/realestate.png" width={300} alt="" className='rounded-lg' />
                <h3 className="text-xl font-semibold mb-2">Real-Estate</h3>
                <p className="text-sm text-gray-300 mb-4 w-[300px]">
                  A Real-Estate website.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-cyan-200">
                  <span className="bg-cyan-800/50 px-2 py-1 rounded">React</span>
                  <span className="bg-cyan-800/50 px-2 py-1 rounded">Tailwind</span>
                </div>
                <div className="mt-4 flex justify-between text-sm text-cyan-400">
                  <a href="https://github.com/RaiyanHossainDev/Projects/tree/main/Project%203%20Furniture" target='_blank' className="hover:underline">GitHub →</a>
                  <a href="https://projects-ny3jq3exo-raiyanhossaindevs-projects.vercel.app/" target='_blank' className="hover:underline">Live Demo →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default page