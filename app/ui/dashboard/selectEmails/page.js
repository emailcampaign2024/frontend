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
        options.map((option) => selectAllValues.push(option))
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
        <div className="w-[700px] h-[340px] overflow-y-scroll bg-gray-100 shadow-md top-20 absolute">
            <button type='button' className=' py-3 my2 bg-gray-300 hover:bg-gray-400 w-full  text-sm' onClick={handleConfirmEmails} >Confirm</button>
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
          <div key={option}  className="cursor-pointer py-1 px-4 border-b border-borderColor flex items-center">
            <input
              id='checkBox'
              type="checkbox"
              value={option}
              checked={selectedValues.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className='m-2'
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
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
