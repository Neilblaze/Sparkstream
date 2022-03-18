import React from 'react'
import hero from "../asset/hero.png"
import heroCover from "../asset/hero-cover.png"
import sectionCover from "../asset/section-cover.png"
import lights1 from "../asset/lights1.png"
import lights2 from "../asset/lights2.png"
import itsfree from "../asset/itsfree.png"
import dot from "../asset/dot.png"
import mask from "../asset/mask.png"
import sphere from "../asset/sphere.png"
import triangle from "../asset/triangle.png"


import stay from "../asset/stay.png"
import saves from "../asset/saves.png"
import decent from "../asset/decent.png"
import serverless from "../asset/serverless.png"
import encrypt from "../asset/encrypt.png"
import p2p from "../asset/p2p.png"
import azizphoto from "../asset/azizphoto.png"
import neelphoto from "../asset/neelphoto.png"
import kaiphoto from "../asset/kaiphoto.png"



import devpost from "../asset/devpost.png"
import waves from "../asset/waves.png"



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

import { Link, useNavigate } from 'react-router-dom'

function Homepage() {
    const navigate = useNavigate();
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

                            <p className="px-6 sm:px-9 py-4 rounded-lg shadow-sm active:shadow-inner font-bold text-white shadow-xl" style={{ backgroundImage: "linear-gradient(90deg, #4B92B0 0%, #38C2C2 100%)" }} onClick={() => navigate("/")}>Start session</p>


                            <p className="px-6 sm:px-9 py-4 rounded-lg shadow-sm active:shadow-inner font-bold shadow-xl" style={{ backgroundImage: "linear-gradient(90deg, #F4E6FF 0%, rgba(205, 254, 245, 0.63) 100%);" }}>Learn more</p>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="w-full md:w-5/12  relative">

                        <img src={polka} alt="" className='absolute -top-12 -left-12 z-0' />

                        <img src={hero} alt="" className='relative z-20 ' />
                        <img src={polka} alt="" className='absolute -bottom-12 -right-12 z-0' />
                        <img src={lights1} alt="" className='absolute -top-12 -right-12 z-30' />
                        <img src={lights2} alt="" className='absolute -bottom-12 -left-12 z-30' />

                    </div>
                </div>
            </div>


            {/* Features section */}
            <div className="w-full bg-black py-24 " >
                <div className="container mx-auto bg-black  py-20 px-4 relative ">
                    <img src={sectionCover} alt="" className='absolute w-full h-full z-0 ' />
                    <img src={dot} alt="" className='absolute z-10 -bottom-52 -right-8 ' />

                    <div className="flex flex-row justify-between items-start mb-16">
                        <div className="">
                            <h1 className='font-bold text-4xl text-slate-100 mb-4'>What You Can Get  </h1>
                            <p className='text-slate-500'>We are more than just another collaborative coding and video chatting software.</p>
                        </div>
                        <Link to="/">
                            <p className="px-6 sm:px-9 py-4 rounded-full border border-white cursor-pointer shadow-sm active:shadow-inner font-bold text-white shadow-xl relative" style={{ backgroundImage: "linear-gradient(90deg, #4B92B0 0%, #38C2C2 100%)" }}>
                                <img src={itsfree} className="absolute -right-6 -top-12" alt="" />
                                Start session</p>
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-12 relative z-10">

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-violet-600">
                                <img src={stay} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>Stay Connected </h3>
                                <p className='text-slate-500'>Helps you stay connected even if
                                    you’ve got critical bandwidth drops. </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-orange-500">
                                <img src={decent} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>Decentralized Infrastructure </h3>
                                <p className='text-slate-500'>App built on Decentralized and Distributed protocol. </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-sky-400">
                                <img src={p2p} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>P2P Content Delivery </h3>
                                <p className='text-slate-500'>Let your audience send you an Anonymous Message.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-green-700">
                                <img src={saves} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>Saves Bandwidth
                                </h3>
                                <p className='text-slate-500'>IPFS enables faster and more bandwidth-efficient connections.</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-red-400">
                                <img src={serverless} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>Serverless Architecture </h3>
                                <p className='text-slate-500'>No need to setup custom servers, just deploy and voila! </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6  justify-start items-start bg-white rounded-2xl py-6 pl-8 pr-4">
                            <div className="p-2 rounded-lg bg-green-400">
                                <img src={encrypt} alt="" className='w-[40px]' />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className='text text-slate-800 font-bold '>E2E encryption</h3>
                                <p className='text-slate-500'>Provides essential security in network layer & maintains transparency</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full pt-20 px-12">
                <h1 className='font-bold tracking-tight text-4xl font-serif'>What are some of the things that <br /> <span className='underline'>Sparksteam</span>  provide? </h1>
                <img src={demo} alt="" className='w-full max-h-full' />
            </div>

            {/* TEXT */}
            <div className="w-full bg-white px-16 py-24 relative">
                <img src={mask} alt="" className='absolute z-10 -top-20 right-0' />
                <img src={sphere} alt="" className='absolute z-10 -bottom-16 left-0' />

                <div className="container flex flex-row justify-between items-start">
                    <div className="flex flex-col justify-center items-start gap-12 w-5/12">
                        <p className='text-sm text-slate-700'>Not your typical side-project story</p>
                        <h1 className='text-slate-900 text-5xl font-bold'>
                            Our story isn’t usual
                            but it is extra ordinary
                            learn about it.
                        </h1>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-8 text-lg text-slate-700 w-6/12">
                        <p>Just after COVID hit, a boom towards Virtual Hackathons became quite prominent. Participants join from all across the globe, with variety of constraints be it experience with collaboration or connection issues.</p>
                        <p>Upon carrying forward extensive research on few specific but common problems we came with one noble & most importantly an innovative solution that can revolutionize the whole expeince of virtual aka online hackathons by helping uplift the user experience.</p>
                        <p>
                            And if you’re curious about the name, that’s a story for another day</p>
                    </div>
                </div>
            </div>

            {/* TEAM */}
            <div className="w-full bg-white">
                <h1 className='text-center text-3xl font-bold tracking-wide'>A team of <span className='text-sky-700'>3</span> diverse skillsets</h1>

                <div className="container mx-auto relative">
                    <img src={waves} alt="" className='w-full h-full absolute z-0' />
                    <img src={triangle} alt="" className='-bottom-12 right-0 absolute z-0' />

                    <div className="flex flex-row justify-evenly items-center py-10 relative z-10">
                        <div className="flex flex-col justify-center items-center">
                            <img src={azizphoto} alt="" className='mb-5' />
                            <p className='font-semibold text-lg mb-1'>Aziz Abdullaev</p>
                            <p className='text-slate-700 mb-3'>Front-end, integrations</p>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <img src={devpost} alt="" />
                                <p className='font-bold'>@azyzz228</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <img src={neelphoto} alt="" className='mb-5' />
                            <p className='font-semibold text-lg mb-1'>Pratyay Banerjee</p>
                            <p className='text-slate-700 mb-3'>Lead, Backend, ML/AI</p>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <img src={devpost} alt="" />
                                <p className='font-bold'>@neilblaze</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <img src={kaiphoto} alt="" className='mb-5' />
                            <p className='font-semibold text-lg mb-1'>Kai You</p>
                            <p className='text-slate-700 mb-3'>Front-End, DevOps</p>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <img src={devpost} alt="" />
                                <p className='font-bold'>@school021195</p>
                            </div>
                        </div>
                    </div>
                </div>
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