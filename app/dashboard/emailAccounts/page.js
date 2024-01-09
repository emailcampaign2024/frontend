'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import CheckBox from "@mui/material/Checkbox";

// import { emailAccountsData } from '@/constants';
import DashboardHeader from '@/app/ui/dashboard/dashboardHeader/page'
import EmailAccountCard from '@/app/ui/dashboard/emailAccountCard/page'
import EmailCardShimmer from '@/app/ui/dashboard/shimmer/page';

const EmailAccounts = () => {
  const [emailAccountsData , setEmailAccountsData] = useState([])
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  useEffect(() => {
    axios.get("https://email-campaign-lnfx.onrender.com/email/details").then((res) => {
      setEmailAccountsData(res.data);
    });
  }, [emailAccountsData]);

 
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



  return (
    <div className='w-full'>
      <DashboardHeader heading={'Email Accounts'} />
      <div className='float-right px-6 py-4 my-2'>
        <Link href={'/dashboard/emailAccounts/connect'}>
        <button type='button' className='rounded-lg px-4 py-2 bg-primary hover:bg-primaryDark text-white' onClick={handleAddNew}>+ Add new</button></Link>
      </div>
      
      <div className='w-full flex flex-col space-y-4'>
      <header className="flex justify-between items-center px-8 py-2 mx-4  text-xs font-semibold  text-textSoft">
        <div className='flex gap-3 items-center min-w-[30%]'>
          <CheckBox onChange={handleSelectAll} checked={selectAllChecked} />
          <p>NAME</p>
        </div>
        <div className='flex items-center justify-between min-w-[20%]'>
          <p>EMAIL SENT</p>
          <p className='-mr-12'>WARMUP EMAIL SENT</p>
        </div>
        <div className='flex items-center justify-end space-x-8 min-w-[30%]'>{""}</div>
      </header>
        {emailAccountsData ? emailAccountsData.map((item) => {
          return <EmailAccountCard key={item.emailAddress} {...item} isSelected={selectedAccounts.includes(item.emailAddress)} handleCardSelection={handleCardSelection} />
        }): <EmailCardShimmer />}
      </div>
    </div>
  )
}

export default EmailAccounts