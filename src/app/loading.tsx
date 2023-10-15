
const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
          <p className='text-7xl font-thin'>L</p>
          <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
          <p className='text-7xl font-thin'>ading....</p>
        </div>
      )
};

export default Loading;


// import React from 'react'

// const SmallSpinner = () => {
//   return (
//     <div className='flex justify-center items-center h-full'>
//       <div className='w-6 h-6 border-2 border-dashed rounded-full animate-spin border-white'></div>
//     </div>
//   )
// }

// export default SmallSpinner