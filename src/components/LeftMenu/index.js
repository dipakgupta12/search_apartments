import React from 'react';
import { X } from 'react-feather';
import './styles.css';

function LeftMenu (props) {
  return (
    <div className={`${props.leftMenuOpen ? 'left-menu-open' : 'left-menu-close'}`}>
      <div className="p-2 text-right">
        <X onClick={() => props.setLeftMenuOpen(false)}/>
      </div>
      <div className="m-2 p-1 border-bottom">
        Option 1
      </div>
      <div className="m-2 p-1 border-bottom">
        Option 2
      </div>
    </div>
  )
}

export default LeftMenu;