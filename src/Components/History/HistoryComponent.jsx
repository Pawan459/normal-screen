import React from 'react';
import './HistoryComponent.scss';
import {
  PROFILE_LOGO,
  MISSED_CALL,
  OUTGOING_CALL,
  INCOMING_CALL,
  X_STREAM_GREEN as X_STREAM,
  CALL_LOGO
} from '../../Assets';

// Components Here
import Header from '../Common/Header/Header';


export default function HistoryComponent() {
  return (
    <div className="history-component">
      <Header>
        <h3>History</h3>
        <img className="profile-logo" src={PROFILE_LOGO} alt="PROFILE LOGO" />
      </Header>
    </div>
  );
}