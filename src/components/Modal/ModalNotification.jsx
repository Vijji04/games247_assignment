import React from 'react'
import exclamationIcon from '../..//assets/exclamationIcon.svg'
import likeIcon from '../..//assets/likeIcon.svg'

import '../../styles/componets/Modal/ModalNotification.scss'

function ModalNotification() {
  return (
    <div className='notificationContainer'>
        <div className='notificationUpperWrapper'>
            <div className='notificationUpper'>
            <img src={exclamationIcon} alt="" />
            
            <p>Starting 1st October 2023, 28% GST is being charged by Government on your deposits.</p>
            </div>
       
        </div>
        <div className='notificationBottomWrapper'> 
        <div className='notificationBottom'>
            <img src={likeIcon} style={{height:'24px',width:'24px'}} alt="" />
            <p>100% Govt. GST paid by RummyCircle</p>
        </div>
        </div>
     
   
    </div>
  )
}

export default ModalNotification