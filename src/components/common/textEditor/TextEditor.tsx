import React,{useState,useMemo} from 'react';
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { ICommon } from '../../../interfaces/ICommon';

const TextEditor = () => {
    const [body,setBody] = useState("");
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);

  return (
    <>
        <ReactQuill
          placeholder='Write a description....'      
        />
    </>
  )
}

export default TextEditor