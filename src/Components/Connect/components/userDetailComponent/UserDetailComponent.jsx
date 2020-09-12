import React from "react";
import { X_STREAM, VIDEO_CALL, END_CALL } from "../../../../Assets";


// SCSS of components
import './UserDetailComponent.scss';


export default function UserDetailComponent({user}) {
  return (
    <div className = "user-detail-component">
      <div
        className={`online-status ${user.isActive ? "online" : "offline"}`}
      />
      <div className="user-details">
        <div className="user-name">
          <h4>{user.name}</h4>
        </div>
        <div className="user-role">{user.role}</div>
        <div className="user-id">ID: {user.ID}</div>
      </div>
      <div className="grow" />
      <div className="logo">
        <img src={X_STREAM} alt="STREAM_LOGO" />
        <img src={VIDEO_CALL} alt="VIDEO_CALL_LOGO" />
        <img src={END_CALL} alt="CALL_LOGO" />
      </div>
    </div>
  );
}
