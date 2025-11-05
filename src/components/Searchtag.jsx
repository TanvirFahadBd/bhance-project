import React from 'react'

function Searchtag({children,first}) {
  return (
    <div className={`font-bold hover:bg-black hover:text-white }
     rounded-full px-3 py-2 cursor-pointer duration-300`}>
      {children}
    </div>
  )
}

export default Searchtag
