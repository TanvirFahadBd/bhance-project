import React from 'react'

function Searchtag({children,first}) {
  return (
    <div className={`font-bold ${first ? 'bg-black' : ''} ${first ? 'text-white' : ''}
     ${first ? 'rounded-full' : '' } px-3 py-2 cursor-pointer`}>
      {children}
    </div>
  )
}

export default Searchtag
