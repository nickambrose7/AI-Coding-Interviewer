import Link from 'next/link';
import React from 'react';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
        <Link href={'/'} className='flex items-center justify-center h-20'>
            <img src='/logo.png' alt='LeetClone' className='h-full' />
        </Link>
        <div className='flex items-center'>
            <button 
                className='bg-brand-orange text-white px-2 py-1 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-brand-orange hover:border-brand-orange'
            >Sign In</button>
        </div>
    </div>
}
export default Navbar;