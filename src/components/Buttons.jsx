

function Buttons({children,Tab="Button",primary,secondry}) {
  return (
    <Tab className={`${primary ? 'bg-primary' : '' } px-5 py-3 
    rounded-full cursor-pointer
    ${secondry ? 'bg-secondry' : '' } ${secondry ? 'border-2 border-borderGray' : '' } font-semibold ${primary ? 'text-secondry' : '' }
     ${secondry ? 'border-2 text-primary' : '' }`} >
    {children}
    </Tab>
  )
}

export default Buttons
