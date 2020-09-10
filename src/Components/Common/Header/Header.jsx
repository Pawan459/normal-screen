import React from 'react';
import './Header.scss';

export default function Header(props) {
  return (
    <header className='common-header'>
      {props.children}
    </header>
  );
}