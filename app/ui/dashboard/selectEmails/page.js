'use client'
import React, { useEffect, useState } from 'react';

const SelectEmails = ({selectedValues , setSelectedValues , options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [checked , setChecked] = useState(false)

  useEffect(() => {
    
  },[])
  
  const handleCheckboxChange = (value) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];
    setSelectedValues(updatedValues);

    if(selectedValues.length !== options.value){
      setChecked(false)
    }
  };

  const handleConfirmEmails = () => {
    setIsOpen(false)
  }

  const handleSelectAll = () => {
    selectedValues.length === options.length  ? setChecked(false) : setChecked(true) ;

    if(document.getElementById('checkBox').checked){
      const selectAllValues = [] ;
        options.map((option) => selectAllValues.push(option.value))
        setSelectedValues(selectAllValues)
      }else{
        setSelectedValues([])
      }
  }
      


  return (
    <div className='flex gap-2 lg:w-full'>
      <button type='button' className='w-[200px] border-borderColor border p-2 hover:bg-fadedBg rounded-md ' onClick={() => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
      }}>Select Email IDs</button>
      {isOpen ? (
        <div className="w-[700px] h-auto bg-gray-100 shadow-md top-20 absolute">
          <div className="cursor-pointer py-1 px-4 border-b border-borderColor flex items-center">
            <input
              id='checkBox'
              name='selectAll'
              type="checkbox"
              value={checked}
              checked={checked}
              onChange={handleSelectAll}
              className='m-2'
            />
            <label htmlFor='selectAll'>Select all</label>
          </div>
        {options.map((option) => (
          <div key={option.value}  className="cursor-pointer py-1 px-4 border-b border-borderColor flex items-center">
            <input
              id='checkBox'
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className='m-2'
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
        <button type='button' className='px-4 py-2 bg-gray-300 float-right m-2 rounded-md text-sm' onClick={handleConfirmEmails} >Confirm</button>
      </div>
      ) : null}
      <div className='w-full flex gap-2 px-2 border border-borderColor rounded-md items-center overflow-hidden'>
        {selectedValues?.map((value) => {
            return (
                <div key={value} className='rounded-lg bg-gray-200 px-2 py-1 min-w-fit ' >
                    {value}
                    <button className='px-2 font-bold  ' onClick={() => handleCheckboxChange(value)}>x</button>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default SelectEmails;
