import React from 'react';
import './Damage.css';

const Damage=()=>{
    return(
        <div className="Damage   text-right float-left w-screen mt-5 p-2.5 ">
            <div className='bg-slate-50 max-w-4xl drop-shadow-xl rounded-md p-2.5 m-auto'>
            <p className=' text-title font-bold'>آسیب پذیری هایی که در 24ساعت گذشته انجام شده</p>
            <table className="  rounded-lg overflow-hidden   w-5/6 text-xxs md:text-sm lg:text-md">
                <tr className='bg-gray-300 sm:text-xxs lg:text-sm text-center '>
                    <th className=''>درجه کیفی خطر</th>
                    <th>شدت خطر</th>
                    <th>آدرس</th>
                    <th>منبع</th>
                    <th>تاریخ انتشار</th>
                    <th>شناسه آسیب پذیری</th>
                </tr>
                <tr className='text-center sm:text-xxs lg:text-sm'>
                    <th>بالا</th>
                    <th>5.7 <span className='bg-yellow-400 rounded-full w-4 h-4 float-right'></span></th>
                    <th className=''><a href="https://www.google.com/">https://hrdjgjfsdklkvjddsjv</a></th>
                    <th>AMD</th>
                    <th>2022</th>
                    <th>CVE-2022</th>

                </tr>
                <tr className='text-center sm:text-xxs lg:text-sm'>
                    <th>بالا</th>
                    <th>5.7 <span className='bg-yellow-400 rounded-full w-4 h-4 float-right'></span></th>
                    <th><a href="https://www.google.com/">https://www.google.com/</a></th>
                    <th>AMD</th>
                    <th>2022</th>
                    <th>CVE-2022</th>

                </tr>
                <tr className='text-center sm:text-xxs lg:text-sm'>
                    <th>بالا</th>
                    <th>5.7 <span className='bg-yellow-400 rounded-full w-4 h-4 float-right'></span></th>
                    <th><a href="https://www.google.com/">https://www.google.com/</a></th>
                    <th>AMD</th>
                    <th>2022</th>
                    <th>CVE-2022</th>

                </tr>
                <tr className='text-center sm:text-xxs lg:text-sm'>
                    <th>بالا</th>
                    <th>5.7 <span className='bg-yellow-400 rounded-full w-4 h-4 float-right'></span></th>
                    <th><a href="https://www.google.com/">https://www.google.com/</a></th>
                    <th>AMD</th>
                    <th>2022</th>
                    <th>CVE-2022</th>

                </tr>
            </table>
            </div>
        </div>
    )
}

export default Damage;