import React from 'react'
import {useAddress, useDisconnect, useMetamask} from '@thirdweb-dev/react'

function NFTDropPage() {

  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  console.log(address)

  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        {/* left side */}

            <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
                <div className='flex flex-col items-center justify-center  py-2 lg:min-h-screen'>
                  <div className='bg-gradient-to-br from-yellow-400 to-purple-600 py-2 rounded-xl'>
                      <img className='w-44 rounded-xl object-cover lg:h-96 lg:h-72' src="https://links.papareact.com/8sg" alt="" />
                  </div>
                  <div className='text-center space-y-2 p-5'>
                    <h1 className='text-4xl font-bold text-white'>
                      Drk Apes
                    </h1>
                    <h2 className='text-xl text-gray-700'>
                      A collection of Drk Apes who live in Phnom Penh
                    </h2>
                  </div>
                </div>

            </div>


        {/* right side */}
            
        <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
            {/* Header*/}
            <header className='flex item-center justify-between '>
                <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
                   The {' '}
                   <span className='font-extrabold underline decoration-pink-600/50'>
                      Drk
                   </span>{' '}
                   NFT Market Place
                </h1>

                <button onClick={address ? disconnect : connectWithMetamask} className='rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base'>
                  {address ? 'Sign Out' : 'Sign In'}
                </button>
            </header>

            <hr className='my-2 border'/>
            {/* showing user address */}
            {address && <p className='text-center text-sm text-rose-400'>
              You're logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>}


            {/* Content */}

            <div className='mt-10 flex flex-1 flex-col item-center space-y-6 text-center lg:justify-center
                            lg:space-y-0'>
              <img className='w-80 object-cover pb-10 lg:h-42' src="https://links.papareact.com/bdy" alt="" />
              <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The Drk Ape Web3 | NFT Drop</h1>
            </div>

            {/* Mint Button */}
            <button className='mt-10 h-16 w-full rounded-full bg-red-600 font-bold text-white'>
              Mint NFT (0.01 ETH)
            </button>
        </div>
    </div>
  )
}

export default NFTDropPage