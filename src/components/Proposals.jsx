import React from 'react'

const Proposals = () => {
  return (
    <div className='flex flex-col p-8'>
        <div className='flex justify-center items-center' role='group'>
        <button
                    className="px-4 py-2.5 bg-blue-600 font-medium
                    text-sm leading-tight uppercase rounded-full text-white 
                    shadow-md shadow-gray-400 active:bg-blue-800 dark:shadow-gray-700
                    transition duration-150 ease-in-out dark:text-blue-500
                    dark:border dark:border-blue-500 dark:bg-transparent"
                >
                    All
                </button>
        <button
                    className="px-4 py-2.5 bg-blue-600 font-medium
                    text-sm leading-tight uppercase rounded-full text-white 
                    shadow-md shadow-gray-400 active:bg-blue-800 dark:shadow-gray-700
                    transition duration-150 ease-in-out dark:text-blue-500
                    dark:border dark:border-blue-500 dark:bg-transparent"
                >
                Open
                </button>
        <button
                    className="px-4 py-2.5 bg-blue-600 font-medium
                    text-sm leading-tight uppercase rounded-full text-white 
                    shadow-md shadow-gray-400 active:bg-blue-800 dark:shadow-gray-700
                    transition duration-150 ease-in-out dark:text-blue-500
                    dark:border dark:border-blue-500 dark:bg-transparent"
                >
                    Closed
                </button>

        </div>
    </div>
  )
}

export default Proposals