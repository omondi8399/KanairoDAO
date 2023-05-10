import { BarChart, Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts" 
const ProposalDetails = () => {
  return (
    <div className='p-8'>
        <h2 className='font-semibold text-3xl mb-5'> Hello World Title</h2>
        <p>This proposal is to payout <strong>{3} ETH</strong> and currently have {' '}
        <strong>{23} votes</strong> and will expire in <strong>{3} days</strong>
        </p>
        <hr className='my-6 border-gray-300 dark:border-gray-500' />
        <p>I cant believe we are getting the final episodes of the flash of 9 seasons.</p>
        <div className='flex justify-start items-center w-full mt-4 overflow-auto'>
            <BarChart width={730} height={250} data={null}>
                <CartesianGrid strokeDasharray="3 3">
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Acceptees" fill="#2563eb" />
                    <Bar dataKey="Rejectees" fill="#dc2626" />
                </CartesianGrid>
            </BarChart>
        </div>
        <div className="flex justify-start items-center space-x-3 mt-4" role="group">
            <button type="button" className="bg-transparent px-4 py-2.5 font-medium
                leading-tight uppercase text-blue-600 text-xs rounded-full
                shadow-md shadow-gray-400 active:bg-blue-800 dark:shadow-transparent
                transition duration-150 ease-in-out
                dark:border dark:border-blue-500 border border-blue-600
                hover:text-white hover: bg-blue-600"
            >Accept</button>
            <button type="button" className="bg-transparent px-4 py-2.5 font-medium
                leading-tight uppercase text-red-600 text-xs rounded-full
                shadow-md shadow-gray-400 active:bg-red-800 dark:shadow-transparent
                transition duration-150 ease-in-out
                dark:border dark:border-red-500 border border-red-600
                hover:text-white hover: bg-red-600"
            >Reject</button>
        </div>
    </div>
  )
}

export default ProposalDetails