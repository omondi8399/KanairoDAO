import { FaUserSecret } from "react-icons/fa"
import { MdLightMode } from "react-icons/md"

const Header = () => {
  return (
    <div className='sticky top-0 z-50 dark:text-blue-500'>
        <nav className='navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between
        bg-white dark:bg-[#212936]'>
            <div className='px-6 w-full flex flex-wrap items-center justify-between'>
                <div className='grow flex justify-between items-center p-2'>
                    <a className='flex justify-start items-center space-x-3'>
                        <FaUserSecret size={25} />
                        <span className="invisible md:visible dark:text-gray-300">
                            Kanairo
                        </span>
                    </a>
                    <div className="flex justify-center items-center space-x-5 ">
                        <MdLightMode className="cursor-pointer" size={25} />
                        <button className="px-4 py-2.5 bg-blue-600 font-medium text-sm leading-tight
                        uppercase rounded-full text-white shadow-md shadow-gray-400 active:bg-blue-800 transition
                        duration-150 ease-in-out dark: text-blue-500 dark:border dark:border-blue-500 
                        dark:bg-transparent">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header