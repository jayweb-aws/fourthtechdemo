'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVertical, Pencil, Trash2, Play } from 'lucide-react';
import clsx from 'clsx';
import dot from '../../../assets/dashboard/3dot.svg'
import pen from '../../../assets/dashboard/Pen.svg'
import file from '../../../assets/dashboard/FileCheck.svg'
import bin from '../../../assets/dashboard/TrashBin.svg'
import Image from 'next/image';

export default function DynamicTable({ columns, data }) {
    return (
        <div className="overflow-x-auto rounded-xl bg-white shadow-md">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100">
                    <tr>
                        {columns.map((col) => (
                            <th key={col.accessor} className="px-6 py-5 bg-[#F8F9FB] text-[#293642] text-[12px] leading-[16px] font-semibold uppercase font-[Poppins]">
                                {col.header}
                            </th>
                        ))}
                        <th className="text-[#293642] text-[12px] bg-[#F8F9FB] leading-[16px] font-semibold uppercase font-[Poppins] px-6 py-5 ">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition">
                            {columns.map((col) => (
                                <td key={col.accessor} className="px-6 py-5 whitespace-nowrap">
                                    {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                                </td>
                            ))}
                            <td className="px-4 py-3">
                                <ActionMenu row={row}  />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ActionMenu({ row }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-[rgba(72,73,232,0.10)] transition-colors">
                <Image src={dot} alt="menu" width={21} height={21} />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1 space-y-1">
                        {/* Edit */}
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={clsx(
                                        'flex w-full items-center gap-2 border-b border-[#ECF1F3] px-3 py-3 text-[#4849E8] rounded-md font-poppins text-[14px] font-normal leading-[18px]',
                                        active ? 'bg-[#ECF1F3]' : ''
                                    )}
                                >
                                    <Image src={pen} alt="menu" width={16} height={16} />
                                    Edit
                                </button>
                            )}
                        </Menu.Item>

                        {/* Activate */}
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={clsx(
                                        'flex w-full items-center gap-2 px-4 py-3 rounded-md border-b border-[#ECF1F3] text-[#4A6073] font-poppins text-[14px] font-normal leading-[18px]',
                                        active ? 'bg-[#ECF1F3]' : ''
                                    )}
                                >
                                    <Image src={file} alt="menu" width={16} height={16} />
                                    Activate
                                </button>
                            )}
                        </Menu.Item>

                        {/* Delete */}
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={clsx(
                                        'flex w-full items-center gap-2 px-4 py-3 rounded-md text-[#F04438] font-poppins text-[14px] font-normal leading-[18px]',
                                        active ? 'bg-[#ECF1F3]' : ''
                                    )}
                                >
                                    <Image src={bin} alt="menu" width={16} height={16} />
                                    Delete
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>

        </Menu>
    );
}
