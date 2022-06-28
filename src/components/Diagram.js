import React, { useEffect, useState } from 'react';
import './Diagram.css';

const Diagram=(props)=>{
    const [content,setContent]=useState(<div></div>);
    let refresh=false;
    useEffect(()=>{
    switch(props.type){
        case 1:
            setContent(<div className='  bg-slate-50 max-w-4xl drop-shadow-xl rounded-md p-2.5 m-auto'><p className=' text-title font-bold'>آسیب پذیری هایی که در 24ساعت گذشته انجام شده</p><br /><div className="diagram1"></div></div>);
        break;
        case 2:
            setContent(<div className='max-w-4xl drop-shadow-xl rounded-md bg-slate-50 m-auto p-2.5'><p className=' text-title font-bold'>آسیب پذیری هایی که در 24ساعت گذشته انجام شده</p><div className="diagram2"></div></div>);
        break;
        case 3:
            setContent(<div className='max-w-4xl drop-shadow-xl rounded-md bg-slate-50 m-auto p-2.5'><p className=' text-title font-bold'>آسیب پذیری هایی که در 24ساعت گذشته انجام شده</p><div className="diagram3"></div></div>);
        break;
        default:
            setContent(<div className='max-w-4xl drop-shadow-xl rounded-md bg-slate-50 m-auto p-2.5'><p className=' text-title font-bold'>آسیب پذیری هایی که در 24ساعت گذشته انجام شده</p><div className="diagram4"></div></div>);
         break;        
    }},[refresh]);

    return(
        <div className="Diagram text-right float-right  w-full mt-5 p-2.5">
            {content}
           
        </div>
    )
}

export default Diagram;