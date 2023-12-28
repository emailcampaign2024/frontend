'use client'
import React, { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '../utils/auth'
import SidebarComponent from '@/app/ui/dashboard/sidebar/sidebar'
import NavbarComponent from '../ui/dashboard/navbar/navbar'

const Layout = ({children}) => {
  const [showSideBar , setShowSideBar] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if(!isAuthenticated()){
      router.push('/auth/login')
    }
    
  },[router])


  return (
    <div className='flex-col overflow-hidden h-full'>
        <div>
            <NavbarComponent handleSideBar={setShowSideBar} isOpen={showSideBar} />
        </div>
        <div className='w-full h-[90vh] flex'>
            <SidebarComponent handleSideBar={showSideBar} />
            <div className={showSideBar ? `min-w-[1300px]` : `w-full`}>{children}</div>
        </div>
    </div>
  )
}

export default Layout