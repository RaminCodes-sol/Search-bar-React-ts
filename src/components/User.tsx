import { useState } from "react";


interface IUserProps {
    name: string;
    email: string;
}

const User:React.FC<IUserProps> = ({ name, email }) => {
  const [copied, setCopied] = useState(false)


  const copyToClipboard = () => {
    setCopied(true)
    navigator.clipboard.writeText(email)
    setTimeout(() => setCopied(false), 500)
  }
  

  return (
    <div className="w-full flex justify-between items-center text-sm border-b px-2 py-4 bg-white text-black">
        <h5>{name}</h5>
        <code onClick={copyToClipboard} className='cursor-pointer p-1 rounded-md transition-colorshover:bg-pink-400'>
          { copied && <span className='text-xs bg-orange-500 text-white mr-2 p-[.3rem] rounded'>Copied</span>}
          {email}
        </code>
    </div>
  )
}

export default User