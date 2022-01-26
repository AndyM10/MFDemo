import React from 'react'
import { FaBeer } from 'react-icons/fa'
import './index.scss'

type NavIconProps = { 
    icon: JSX.Element;
}

const NavIcon = ({ icon }: NavIconProps) => {
    return ( 
      <div className="navicon">
        {icon}
      </div>
    )
   
}

export default () => {
    return (
        <div className='fixed top-0 w-screen h-16 flex flex-row bg-gray-900 text-white shadow-lg'>
            <NavIcon icon={<FaBeer size='32'/>}/>
            <NavIcon icon={<FaBeer size='32'/>}/>
            <NavIcon icon={<FaBeer size='32'/>}/>
            <NavIcon icon={<FaBeer size='32'/>}/>
            <NavIcon icon={<FaBeer size='32'/>}/>
            <NavIcon icon={<FaBeer size='32'/>}/>
        </div>
    )
}