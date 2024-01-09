"use client";

import Link from "next/link";
import UnderLineAnimation from "../underLineAnimation/underLineAnimation";

const Header = () => {
  
  return (
      <header className="w-full h-20 py-3 px-12 bg-slate-50 flex items-center justify-between shadow-sm fixed top-0">
        <div className='font-bold ml-4 text-3xl text-primary cursor-pointer' >Logo</div>
        <ul className="flex gap-12 text-[17px]">
          <li className='p-2 relative inline-block group'>
            <Link href="#section1"> Products</Link>
            <UnderLineAnimation />
          </li>
          <li className='p-2 relative inline-block group'>
            <Link href="#section2">Solutions</Link>
            <UnderLineAnimation />
          </li>
          <li className='p-2 relative inline-block group'>
            <Link href="#section3">Pricing</Link>
            <UnderLineAnimation />
          </li>
          <li className='p-2 relative inline-block group'>
            <Link href="#section4">Integrations</Link>
            <UnderLineAnimation />
          </li>
          <li className='p-2 relative inline-block group'>
            <Link href="/">Resources</Link>
            <UnderLineAnimation />
          </li>
        </ul>
        <div className="space-x-6 font-semibold text-secondary">
        <Link href="/auth/login" className="px-4 py-2 rounded-md  hover:bg-fadedBg" >Sign in</Link>
        <button className='bg-[#61f9cb] hover:bg-[#50caa5] px-4 py-2 rounded-md font-semibold text-[#6a6a6a] hover:text-[#f7f7f7]'>Get Started For Free</button>
        </div>
      </header>
  );
};

export default Header;
