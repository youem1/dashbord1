import React from 'react'
import './Menu.css'

const Menu=(props)=>{
    return(
        <div className='  Menu h-screen bg-red-900 w-52 bg-menuColor text-right p-5 float-right font-extrabold fixed right-0'>
            <div className="closeBtn" onClick={props.close}></div>
            <div className="systemTable_Menu mt-24">
                <span className='font-extrabold text-lg text-white'>میز کار سیستم</span>
            </div>
            <div className="reports_Menu mt-6">
                <span className='text-menuText'>گزارش ها</span>
            </div>
            <div className="search_Manu mt-4">
                <span className='text-menuText'>جستجو</span>
            </div>
            <div className="manager_Menu mt-4">
                <span className='text-menuText'>مدیریت</span>
            </div>

            <div className="manageUsers_Menu mt-4">
                <span className='text-menuText'>مدیریت کاربران</span>
            </div>

            <div className="manageSystem_Menu mt-4">
                <span className='text-menuText'>مدیریت سامانه</span>
            </div>

            <div className="settingSystem_Menu mt-4">
                <span className='text-menuText'>تنظیمات سامانه</span>
            </div>

            <div className="exit_Menu mt-4">
                <span className='text-menuText'>خروج</span>
            </div>
            

        </div>
    )
}

export default Menu;