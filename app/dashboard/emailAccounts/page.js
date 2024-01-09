'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import CheckBox from "@mui/material/Checkbox";

import DashboardHeader from '@/app/ui/dashboard/dashboardHeader/page'
import EmailAccountCard from '@/app/ui/dashboard/emailAccountCard/page'
import EmailCardShimmer from '@/app/ui/dashboard/shimmer/page';
import WarmupAnalyticsCard from '@/app/ui/card/card';

const EmailAccounts = () => {
  const [isLoading , setIsLoading] = useState(true)
  const [emailAccountsData , setEmailAccountsData] = useState([])
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);


  useEffect(() => {
    axios.get('https://email-campaign.onrender.com/email/details').then((res) => {
      setEmailAccountsData(res.data);
        setIsLoading(false)
    });
  }, []);

 
  const handleAddNew = () => {
    
  }

  const handleSelectAll = () => {
    const allEmailAddresses = emailAccountsData.map((item) => item.emailAddress);
    if(selectAllChecked){
      setSelectedAccounts([])
    }else{
      setSelectedAccounts(allEmailAddresses)
    }
    setSelectAllChecked(!selectAllChecked)
  }

  const handleCardSelection = (emailAddress) => {
    setSelectedAccounts((prevSelected) => {
      if (prevSelected.includes(emailAddress)) {
        return prevSelected.filter((email) => email !== emailAddress);
      } else {
        return [...prevSelected, emailAddress];
      }
    });
    setSelectAllChecked(selectedAccounts.length === emailAccountsData.length - 1);
  };



  return(
    <div className='w-full space-y-8 '>
      <DashboardHeader heading={'Email Accounts'} />
      <div className='w-full flex justify-end px-6  my-2 '>
        <Link href={'/dashboard/emailAccounts/connect'}>
        <button type='button' className='rounded-lg px-4 py-2 bg-primary hover:bg-primaryDark text-white' onClick={handleAddNew}>+ Add new</button></Link>
      </div>
      <div className='flex  justify-around mx-6'>
        <WarmupAnalyticsCard heading={'Total Emails Listed'} count={84} bgColor='blue-50' />
        <WarmupAnalyticsCard heading={'Total Emails Sent'} count={258} bgColor='blue-50' />
        <WarmupAnalyticsCard heading={'Total Bounced Emails '} count={12} bgColor='blue-50'  />
        <WarmupAnalyticsCard heading={'Total Bounced Emails '} count={12} bgColor='blue-50'  />
      </div>
      <div className='w-full flex flex-col'>
      <header className="flex justify-between items-center px-8 py-2 mx-4  text-xs font-semibold  text-textSoft">
        <div className='flex gap-3 items-center min-w-[30%]'>
          <CheckBox onChange={handleSelectAll} checked={selectAllChecked} />
          <p>NAME</p>
        </div>
        <div className='flex-1 flex items-center justify-between min-w-[20%]'>
          <p>BOUNCE EMAIL</p>
          <p className=''>WARMUP EMAIL SENT</p>
          <p>OPENED</p>
          <p className='ml-12'>UNREAD</p>
        </div>
        <div className='flex items-center justify-end space-x-8 min-w-[29%]'>{""}</div>
      </header>
      {isLoading ? (
          Array.from({ length: 2 }).map((_, index) => (
            <EmailCardShimmer key={index} />
          ))
        ) : (
          emailAccountsData.map((item) => (
            <EmailAccountCard key={item.id} {...item} isSelected={selectedAccounts.includes(item.emailAddress)} handleCardSelection={handleCardSelection}/>
          ))
        )}
      </div>
    </div>
  )
}

export default EmailAccounts