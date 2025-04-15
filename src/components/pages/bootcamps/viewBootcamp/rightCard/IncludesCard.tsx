import React,{Component} from 'react';
import imgJPG from "../../../../../assets/01.jpg";
import Image from "next/image";
import Link from "next/link";
import {IoBookSharp} from "react-icons/io5";
import {MdWatchLater} from "react-icons/md";
import {GiNetworkBars} from "react-icons/gi";
import {TbWorld} from "react-icons/tb";
import {IoCreateOutline} from "react-icons/io5";
import {TbCertificate} from "react-icons/tb";
import moment from "moment";


const IncludesCard = ({course}:{course:any}) => {
    
  return (
    <div className='p-2 mt-5' style={{boxShadow: "0px 0px 40px rgba(29, 58, 83, 0.15)"}}>
        <div className='p-4'>
            <h3 className='font-bold text-2xl font-nunito'>This course includes</h3>
            <ul className='mt-3'>
                <li className='flex justify-between items-center mb-3'>
                    <span className='flex items-center gap-[6px] font-nunito'><IoBookSharp className='text-[#066AC9]'/>Lectures</span>
                    <span className='text-[#98999C]'>{course.numberOfLectures}</span>
                </li>
                <li className='flex justify-between items-center mb-3'>
                    <span className='flex items-center gap-[6px] font-nunito'><MdWatchLater className='text-[#066AC9]'/>Duration</span>
                    <span className='text-[#98999C]'>{course.durationInMinutes}h</span>
                </li>
                <li className='flex justify-between items-center mb-3'>
                    <span className='flex items-center gap-[6px] font-nunito'><GiNetworkBars className='text-[#066AC9]'/>Skills</span>
                    <span className='text-[#98999C]'>{course.level}</span>
                </li>
                <li className='flex justify-between items-center mb-3'>
                    <span className='flex items-center gap-[6px] font-nunito'><TbWorld className='text-[#066AC9]'/>Language</span>
                    <span className='text-[#98999C]'>{course.language}</span>
                </li>
                <li className='flex justify-between items-center mb-3'>
                    <span className='flex items-center gap-[6px] font-nunito'><IoCreateOutline className='text-[#066AC9]'/>Deadline</span>
                    <span className='text-[#98999C]'> {moment(course.updatedAt).utc().format("YYYY/MM/DD")}</span>
                </li>
                <li className='flex justify-between items-center mb-3'>
                    <span className='flex items-center gap-[6px] font-nunito'><TbCertificate className='!text-[#066AC9]'/>Certificate</span>
                    <span className='text-[#98999C]'>Yes</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default IncludesCard