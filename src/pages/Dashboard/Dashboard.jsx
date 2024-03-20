import React from 'react'
import logo from '../../assets/images/Subtract.png'
import { SidebarOption } from '../../components/SidebarOption'
import dashboard from '../../assets/images/dashboard.png'
import ticket from '../../assets/images/ticket.svg'
import Document from '../../assets/images/Document.png'
import setting from '../../assets/images/setting.png'
import notification from '../../assets/images/notification.png'
import calendar from '../../assets/images/Calendar.png'
import upload from '../../assets/images/upload.svg'
import noti from '../../assets/images/noti.png'
import profile from '../../assets/images/profile.png'


export const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='bg-white w-1/6 h-screen'>
                <div className='h-28 flex items-center  justify-center gap-4 '>
                    <img src={logo} alt="" />
                    <span className='font-montserrat font-normal text-2xl text-black'>Base</span>
                </div>
                <div className='pt-4 flex flex-col gap-8 '>
                    <SidebarOption text="Dashboard" image={dashboard} />
                    <SidebarOption text="Upload" image={upload} />
                    <SidebarOption text="Invoice" image={ticket} />
                    <SidebarOption text="Schedule" image={Document} />
                    <SidebarOption text="Calender" image={calendar} />
                    <SidebarOption text="Notification" image={notification} />
                    <SidebarOption text="Settings" image={setting} />
                </div>
            </div>
            <div className='bg-custom h-screen w-full pl-4 pr-4 pt-8'>
                <div className='h-18 flex justify-between '>
                    <div><span className='font-figtree font-semibold text-2xl'>Upload CSV</span></div>
                    <div className='flex gap-6 justify-center align-middle'>
                        <div className='flex  justify-center align-middle'>
                            <img className='w-6 h-8' src={noti} alt="" />
                        </div>
                        <div className='flex  justify-center align-middle'>
                            <img className='rounded-2xl' src={profile} alt="" />
                        </div>

                    </div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
