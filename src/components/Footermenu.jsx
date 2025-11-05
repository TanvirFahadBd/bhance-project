import React from 'react'

function Footermenu({children,Tab="a"}) {
  return (
    <Tab className="cursor-pointer">
      {children}
   </Tab>
  )
}

export default Footermenu
