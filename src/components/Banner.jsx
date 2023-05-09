import React from 'react'

const Banner = () => {
  return (
    <div className='p-8'>
        <h2 className='font-semibold text-3xl mb-5'>
            {5} Proposals Currently opened
        </h2>
        <p>Current DAO Balance:
            <strong>{3} ETH </strong><br />
            Your Contribution:{''}
            <strong>{5} ETH </strong>
            {false ? ',and you are now a stakeholder': null}
        </p>
        <hr className='my-6 border-gray-300 dark:border-gray-500' />
        <p>
            {false ? 
                'You can now raise proposal on this platform' :
                'Hey, when you contribute up to 1 ETH you become a stakeholde'
            }
        </p>
        <div className='flex justify-start items-center md:w-1/3 w-full mt-4'>
            <input type='number' className='form-control block w-full px-3 py-1.5
            text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-700
            dark:bg-transparent rounded transition ease-in-out m-0 shadow-md focus:text-gray-500 focus:outline-none
            dark:border-gray-500' placeholder='E.g. 3.2 ETH' required />
        </div>

        <div className='flex justify-start items-center space-x-2 mt-4'>
            <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium
            text-sm leading-tight uppercase shadow-md rounded-full dark:shadow-transparent hover:bg-blue-700
            transition duration-150 ease-in-out'
            >Contribute</button>

            <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium
            text-sm leading-tight uppercase shadow-md rounded-full dark:shadow-transparent hover:bg-blue-700
            transition duration-150 ease-in-out'
            >Propose</button>
        </div>
    </div>
  )
}

export default Banner