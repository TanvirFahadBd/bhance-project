import React from 'react'

function Creative({children}) {
  return (
    <div className='bg-white flex px-5 py-3 items-center gap-2
     rounded-[4px] border-1 border-borderGray font-bold cursor-pointer'>
      {children}
    </div>
  )
}

export default Creative
