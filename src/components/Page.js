import React, { useState } from 'react';
import './Page.css';
import Menu from  './Menu';
import GeneralInfo from './GeneralInfo';
import Damage from './Damage';
import Diagram from './Diagram'

const Page=()=>{
    const [menu,setMenu]=useState();
    
    const open_menu=()=>{
        setMenu(true)
        

    }

    const close_menu=()=>{
        setMenu(false);
    }
    

    return(
        <div className="Page bg-background w-screen h-screen fixed block overflow-scroll">
            <header className='w-screen relative text-left bg-slate-50 h-fit drop-shadow-2xl float-left p-3'>
                <div className='profile_Header float-left w-fit  '><div className='w-12 h-12 rounded-full bg-gray-400 m-auto'></div><div className="nameProfile text-xs text-gray-400 mt-1">رسول احمدی</div></div>
                <div className=' float-left border-gray-400  border-solid border-l-2 ml-2.5 mr-2.5 mt-2.5'><div className='comment_Header w-8  h-8  ml-12'><div className='count_comment w-4 h-4 bg-pink-500 float-right text-xs text-center'>6</div></div></div>
                <div className=' float-left border-gray-400  border-solid border-l-2 ml-2.5 mt-2.5'><div className='notification_Header w-8 h-8  ml-12'><div className='count_notification w-4 h-4 bg-pink-500 float-right text-xs text-center'>6</div></div></div>
                <div className="hamburgerMenu float-right" onClick={open_menu}></div>
            </header>
           { menu ? (<Menu close={close_menu}/>):''}
            <GeneralInfo></GeneralInfo>
            <Damage></Damage>
            <Diagram type={1}></Diagram>
            <Diagram type={2}></Diagram>
            <Diagram type={3}></Diagram>
            
            

        </div>
    )
}

export default Page;