'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    // useSetRecoilState is a hook that returns a setter function for a given atom
    const setAuthModalState = useSetRecoilState(authModalState) 
    const handleClick = () => {
        setAuthModalState((prev) => ({
            ...prev, // spread operator to copy the previous state, except for the isOpen property, we update it to true
            isOpen: true
        }))
    }
    
    return <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
        <Link href={'/'} className='flex items-center justify-center h-20'>
            <Image src='/logo.png' alt='LeetClone' height={200} width={200} />
        </Link>
        <div className='flex items-center'>
            <button 
                className='bg-brand-orange text-white px-2 py-1 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-brand-orange transition duration-300 ease-in-out'
                onClick={handleClick}
            >Sign In</button>
        </div>
    </div>
}
export default Navbar;