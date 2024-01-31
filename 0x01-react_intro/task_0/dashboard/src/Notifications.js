import React from 'react'
import './Notifications.css';
import close from './close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <button aria-label="Close" onClick={() => console.log('Close button has been clicked')} style={{  color: "#3a3a3a", background: "none", border: "none", fontSize: "10px", position: "absolute", right: "0px", top: '4px', cursor: "pointer" }}>
        <img src={close} alt="" width="12px"/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  )
}