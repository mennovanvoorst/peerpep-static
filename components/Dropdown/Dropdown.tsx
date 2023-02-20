import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import { IoChevronDown } from 'react-icons/io5';

export type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
};

export const Dropdown = ({
  label,
  options,
  value,
  onChange
}: DropdownProps) => (
  <div className="relative">
    <Menu>
      <Menu.Button className="flex items-center gap-2 hover:text-pink-500 active:text-pink-300">
        {label}
        <span className="w-4 h-4">
          <IoChevronDown />
        </span>
      </Menu.Button>
      <Menu.Items className="absolute z-50 bg-gray-100 rounded-lg shadow py-2 mt-4 w-44 -translate-x-1/2 left-1/2 flex flex-col">
        {options.map((option) => (
          <Menu.Item key={option.value} as={Fragment}>
            <button
              className={`w-full h-10 ${
                value === option.value && 'bg-gray-200 text-pink-500 underline'
              } hover:bg-gray-200`}
              onClick={() => onChange(option.value)}
            >
              {option.label}
            </button>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  </div>
);
