import React from 'react';

// Components here
import ConnectComponent from '../../Components/Connect/ConnectComponent';
import HistoryComponent from '../../Components/History/HistoryComponent';

// Component SCSS here
import './HomePage.scss';

export default function HomePage() {
  return (
    <div className="Homepage">
      <ConnectComponent />
      <HistoryComponent />
    </div>
  );
}