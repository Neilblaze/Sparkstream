import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../asset/loginbg.png"
import logo from "../asset/logo.png"
import gdpr from "../asset/gdpr.png"

function Login() {
    return (
        <div className="w-full h-screen relative">
            <img src={bg} alt="" className='absolute top-0 left-0 w-full h-full -z-20' />

            <div className="flex flex-row justify-center items-start gap-8 fixed bottom-10 left-12">
                <img src={gdpr} alt="" className='' />
                <img src={logo} alt="" className='' />

            </div>

            <p className='text-center uppercase font-bold text-2xl pt-8 curson-pointer' style={{ color: "#2388B4" }}>Login</p>
            <div className="container mx-auto flex flex-row justify-center items-center gap-16 mt-32 ">

                <Link to="/web3auth">
                    <p className="px-6 sm:px-12 py-6 rounded-lg shadow-sm active:shadow-inner text-white font-bold" style={{ backgroundImage: "linear-gradient(90deg, #4B92B0 0%, #38C2C2 100%)" }}>Web3 Auth</p>
                </Link>
                <p>OR</p>

                <Link to="/">
                    <p className="px-6 sm:px-12 py-6 rounded-lg shadow-sm active:shadow-inner text-white font-bold" style={{ backgroundImage: "linear-gradient(90deg, #4B92B0 0%, #38C2C2 100%)" }}>Anonymous login</p>
                </Link>
            </div>
        </div>
    )
}

export default Login