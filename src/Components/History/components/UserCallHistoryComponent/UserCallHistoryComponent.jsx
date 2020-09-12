import React from "react";
import {
  MISSED_CALL,
  OUTGOING_CALL,
  INCOMING_CALL,
  X_STREAM_GREEN as X_STREAM,
  CALL_LOGO
} from "../../../../Assets";

// SCSS of components
import "./UserCallHistoryComponent.scss";

export default function UserCallHistoryComponent({ user }) {
  return (
    <div className="user-call-history-component">
      <div className="group-1">
        {user.callType === "misscall" ? (
          <img className="call-type" src={MISSED_CALL} alt="MISSED_CALL" />
        ) : user.callType === "outgoing" ? (
          <img className="call-type" src={OUTGOING_CALL} alt="OUTGOING_CALL" />
        ) : (
          <img className="call-type" src={INCOMING_CALL} alt="INCOMING_CALL" />
        )}
        <div className="details">
          <h4>{user.phone}</h4>
          <p>{user.post}</p>
          <p>ID: {user.id}</p>
        </div>
      </div>
      <div className="grow"></div>
      <div className="group-2">
        <div className="time">
          <p>{user.time}</p>
          <p>{user.callTime}</p>
        </div>
        {user.live ? (
          <img className="live x-stream" src={X_STREAM} alt="X_STREAM" />
        ) : (
          <img className="live call-logo" src={CALL_LOGO} alt="CALL_LOGO" />
        )}
      </div>
    </div>
  );
}
