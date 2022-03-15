import React from 'react'
import hero from "../asset/hero.png"
import heroCover from "../asset/hero-cover.png"
import sectionCover from "../asset/section-cover.png"

import logo from "../asset/logo.png"
import polka from "../asset/polka.svg"
import cookie from "../asset/cookie.png"
import demo from "../asset/demo.png"

// Tech logo
import logoreact from "../asset/logoreact.png"
import logobittorrent from "../asset/logobittorrent.png"
import logochakra from "../asset/logochakra.png"
import logofilecoin from "../asset/logofilecoin.png"
import logofleek from "../asset/logofleek.png"
import logoipfs from "../asset/logoipfs.png"
import logolib2 from "../asset/logolib2.png"
import logomoralis from "../asset/logomoralis.png"
import logopeerjs from "../asset/logopeerjs.png"


function Homepage() {
    return (
        <div className='relative'>

            <div className="w-full relative z-20" >
                <img src={heroCover} alt="" className=' absolute h-full w-full -z-10 ' />
                <div className="container flex flex-col gap-20 md:flex-row justify-between 
                items-center py-24 px-8 ">
                    {/* TEXT / TITLE / CTA */}
                    <div className="w-full md:w-5/12">
                        <img src={logo} alt="" className='' />

                        <h3 className="text-lg font-thin text-sky-900  mt-12 mb-8 class">The new way
                            to find
                            talents
                        </h3>
                        <h1 className="font-manrope font-bold text-4xl md:text-5xl text-slate-800 mb-12 className">Get the important
                            work done Seamlessly
                        </h1>
                        <p className="font-roboto text-lg  mb-16" style={{ color: "#072125" }}>With Sparkstream, you can get more productive work
                            done in far less time than ever before without having
                            overhead of connection disturbances ✔️</p>
                        <div className="flex flex-row justify-start items-center gap-6">
                            <p className="px-6 sm:px-9 py-4 rounded-lg shadow-sm active:shadow-inner" style={{ backgroundImage: "linear-gradient(90deg, #4B92B0 0%, #38C2C2 100%)" }}>Find talent</p>

                            <p className="px-6 sm:px-9 py-4 rounded-lg shadow-sm active:shadow-inner" style={{ backgroundImage: "linear-gradient(90deg, #F4E6FF 0%, rgba(205, 254, 245, 0.63) 100%);" }}>Learn more</p>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="w-full md:w-5/12  relative">

                        <img src={polka} alt="" className='absolute -top-12 -left-12 z-0' />

                        <img src={hero} alt="" className='relative z-20 ' />
                        <img src={polka} alt="" className='absolute -bottom-12 -right-12 z-0' />

                    </div>
                </div>
            </div>


            {/* Features section */}
            <div className="w-full bg-black py-24 " >
                <div className="container mx-auto bg-black  py-20 px-4 relative ">
                    <img src={sectionCover} alt="" className='absolute w-full h-full z-0 ' />
                    <div className="flex flex-row justify-between items-start mb-16">
                        <div className="">
                            <h1 className='font-bold text-4xl text-slate-100 mb-4'>What You Can Get  </h1>
                            <p className='text-slate-500'>We are more than just another collaborative coding and video chatting software.</p>
                        </div>

                        <p className='py-3 px-6 cursor-pointer text-lg text-white rounded-full border border-white'>
                            Start session
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-12 relative z-10">

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-violet-600">
                                <img src={cookie} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>Title </h3>
                                <p className='text-slate-500'>Lorem ipsum dolor sit amet </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-violet-600">
                                <img src={cookie} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>Title </h3>
                                <p className='text-slate-500'>Lorem ipsum dolor sit amet </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-violet-600">
                                <img src={cookie} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>Title </h3>
                                <p className='text-slate-500'>Lorem ipsum dolor sit amet </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-violet-600">
                                <img src={cookie} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>Title </h3>
                                <p className='text-slate-500'>Lorem ipsum dolor sit amet </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-violet-600">
                                <img src={cookie} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>Title </h3>
                                <p className='text-slate-500'>Lorem ipsum dolor sit amet </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-violet-600">
                                <img src={cookie} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>Title </h3>
                                <p className='text-slate-500'>Lorem ipsum dolor sit amet </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full">
                <img src={demo} alt="" className='w-full max-h-full' />
            </div>

            {/* TECHNOLOGIES USED */}
            <div className="w-full bg-white">
                <div className="bg-white py-16 container mx-auto">
                    <h2 className='text-slate-700  text-lg text-center mb-12'> <span className='font-bold'> Sparkstream </span> is fueled by the following technologies </h2>
                    <div className="flex flex-row justify-between items-center w-full px-12">


                        <img src={logochakra} alt="" />
                        <img src={logofilecoin} alt="" />
                        <img src={logoipfs} alt="" />
                        <img src={logobittorrent} alt="" />
                        <img src={logopeerjs} alt="" />
                        <img src={logolib2} alt="" />
                        <img src={logomoralis} alt="" />
                        <img src={logofleek} alt="" />

                    </div>
                </div>
            </div>



            {/* FOOTER */}
            <div className="w-full bg-black">
                <div className="container mx-auto flex flex-row justify-between items-center bg-black py-24 ">
                    <div className="">
                        <h1 className='font-bold text-4xl text-slate-100 mb-12'>Start Engaging <br></br> With Your Audience!  </h1>
                        <p className='text-slate-500'>Start collecting money, feedbacks, emails, anonymous notes and more. .</p>
                    </div>

                    <p className='py-3 px-6 cursor-pointer text-lg text-white rounded-full border border-white'>
                        Start session
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Homepage;