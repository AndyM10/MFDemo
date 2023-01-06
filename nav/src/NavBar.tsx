import React from 'react'
import { FaGem, FaMoon, FaHome} from 'react-icons/fa'
import './index.scss'

type NavIconProps = { 
    icon: JSX.Element;
    href: string;
}

const NavIcon = ({ icon, href }: NavIconProps) => {
    return (
        <>
         <div className="navicon">{icon}{href}</div>
        </>
       
    )
   
}

export default () => {
    return (
        <div className='top-0 w-screen h-16 flex flex-row bg-gray-900 text-white shadow-lg'>
            <NavIcon icon={<FaHome size='32'/>} href='Green NFTs'/>
            <NavIcon icon={<FaGem size='32'/>} href='Loot'/>
            <NavIcon icon={<FaMoon size='32'/>} href='Dark Mode'/>
        </div>
    )
}