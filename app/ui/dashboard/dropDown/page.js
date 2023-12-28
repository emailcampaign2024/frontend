'use client'
import { useState } from 'react';

const Dropdown = ({ templates, handleSelectTemplate, selectedTemplate }) =>  {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (template) => {
    handleSelectTemplate(template);
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block text-textDark'>
      <button
      type='button'
        onClick={toggleDropdown}
        className='inline-flex justify-center w-80 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
      >
        {selectedTemplate ? selectedTemplate.name : 'Select Template'}
      </button>
      {isOpen && (
        <ul className='absolute z-10 w-80 mt-1 bg-white border border-gray-300 rounded-md shadow-lg'>
          {templates?.map((template) => (
            <li
              key={template.name}
              className='px-4 py-2 cursor-pointer hover:bg-gray-100'
              onClick={() => handleOptionClick(template)}
            >
              {template.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default Dropdown