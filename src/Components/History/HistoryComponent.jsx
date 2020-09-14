import React from 'react';
import './HistoryComponent.scss';
import {
  PROFILE_LOGO
} from '../../Assets';

// Components Here
import Header from '../Common/Header/Header';
import UserCallHistoryComponent from './components/UserCallHistoryComponent/UserCallHistoryComponent';

// Hardcoded data
const data = [
  {
    phone: "+91 9876543210",
    post: "External Surveyor",
    id: "9876543",
    time: "10:23 AM",
    callTime: "7 min 23 sec",
    callType: "misscall",
    live: false
  },
  {
    phone: "+91 9876543210",
    post: "Field Runner",
    id: "12342543",
    time: "10:23 AM",
    callTime: "7 min 23 sec",
    callType: "outgoing",
    live: false
  },
  {
    phone: "+91 9876543210",
    post: "Internal Surveyor",
    id: "09876",
    time: "10:23 AM",
    callTime: "7 min 23 sec",
    callType: "incoming",
    live: false
  },
  {
    phone: "+91 9876543210",
    post: "External Surveyor",
    id: "9876543",
    time: "10:23 AM",
    callTime: "7 min 23 sec",
    callType: "outgoing",
    live: true
  }
];

export default function HistoryComponent() {


  const renderCallHistory = currData => {
    if(!currData) return null;
    return currData.map((user, index) => <UserCallHistoryComponent key={index} user={user} />)
  }

  return (
    <div className="history-component">
      <Header>
        <h3>History</h3>
        <img className="profile-logo" src={PROFILE_LOGO} alt="PROFILE LOGO" />
      </Header>
      <div className="scrollable-content">
      {renderCallHistory(data)}
      </div>
    </div>
  );
}