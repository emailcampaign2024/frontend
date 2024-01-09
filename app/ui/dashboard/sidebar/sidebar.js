'use client'
import React from 'react';
import Link from 'next/link';

import { sideBarData } from '@/constants';
import BootstrapTooltip from '../../tooltip/page';

const SidebarComponent = ({handleSideBar}) => {

  return (
    <div className={`h-full ${handleSideBar ? 'min-w-[230px]' : 'w-auto'} shadow-md text-textDark border-r-borderColor border-r `}>
      <ul>
        {sideBarData.map((item) => {
          return handleSideBar ? (
          <Link key={item} href={item.path}>
            <li className="px-4 py-3 hover:bg-fadedBg text-center flex space-x-4 text-gra">
              {item.icon && <item.icon sx={{color:'rgb(156, 163, 175)'}} />}
              <div>{item.name}</div>
            </li>
          </Link>
          ):(
            <Link key={item} href={item.path}>
            <BootstrapTooltip title={item.name} placement='right'>
            <li className="px-4 py-3 hover:bg-fadedBg text-center flex space-x-4">
              {item.icon && <item.icon  sx={{color:'rgb(156, 163, 175)'}} />}
            </li>
            </BootstrapTooltip>
          </Link>
          )
        })}
      </ul>
    </div> 
  )
}

export default SidebarComponent