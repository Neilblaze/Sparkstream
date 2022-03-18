import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bg from "../asset/loginbg.png"
import logo from "../asset/logo.png"
import gdpr from "../asset/gdpr.png"
import moralis from "../asset/moralis.png"

import { useMoralis } from "react-moralis";

function LoginWeb3(props: any) {

    const { authenticate, authError, isAuthenticating, Moralis, isAuthenticated } = useMoralis();
    const navigate = useNavigate();
    const handleCustomLogin = async () => {
        await authenticate({
            provider: "web3Auth",
            clientId: "BLM0AQokB5IAoaW8CZ9xGPEi-IkaTD9Y15HSSIJIK5l2M-zw-NgbiWLZlKhC9vDtkqDbvqrjBnio0OPY-rd0pdE",
            //chainId: Moralis.Chains.ETH_ROPSTEN,
        });



    };

    const redirect = () => {

    }

    return (
        <>
            {isAuthenticated && navigate('/')
            }

            <div className="w-full h-screen relative" >
                <img src={bg} alt="" className='absolute top-0 left-0 w-full h-full -z-10' />

                <div className="flex flex-row justify-center items-start gap-8 fixed bottom-10 left-12">
                    <img src={gdpr} alt="" className='' />
                    <img src={logo} alt="" className='' />

                </div>


                <div className="grid place-items-center h-full ">
                    <div className="flex flex-col justify-between items-center px-12 py-6 h-60 rounded-2xl bg-white">
                        <img src={moralis} alt="" className='w-16' />
                        {isAuthenticating && <p className="text-green-500 font-bold">Authenticating</p>}
                        <p className='text-white px-4 py-2 rounded-full bg-gradient-to-r from-sky-700 to-sky-300 w-full cursor-pointer' onClick={handleCustomLogin}>
                            Login with auth3
                        </p>

                        {authError && (
                            <p className="text-red-500 font-bold">{JSON.stringify(authError.message)}</p>
                        )}


                    </div>

                </div>
            </div >
        </>
    )

}

export default LoginWeb3