'use client';

import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const sortOptions = ['All', 'Active', 'Inactive'];

export default function SortDropdown() {
  const [selected, setSelected] = useState('All');

  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Button */}
      <Menu.Button className="flex h-9 px-3 py-1.5 items-center gap-2 rounded-lg whitespace-nowrap bg-white hover:bg-gray-100  cursor-pointer transition-all border border-[#ECF1F3] text-[#6080B0] font-[Poppins] text-[14px] font-normal leading-[18px]">
        Sort by: <span className="text-[#293642]  text-[14px] font-medium leading-[20px]">{selected}</span>
        <ChevronDownIcon className="w-4 h-4 ml-1 text-[#8F9BB3]" />
      </Menu.Button>

      {/* Dropdown */}
      <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-white border border-[#5B5F71] shadow-lg z-10">
        {sortOptions.map((option) => (
          <Menu.Item key={option}>
            {({ active }) => (
              <button
                onClick={() => setSelected(option)}
                className={`w-full px-4 py-2 text-sm text-left font-[Poppins] ${
                  active ? 'bg-gray-100 text-[#293642] rounded-md' : 'text-[#8F9BB3]'
                }`}
              >
                {option}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
