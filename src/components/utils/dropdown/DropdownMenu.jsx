import React, { useState } from "react";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
// import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export default function DropdownMenu({toggleTheme, isDarkTheme}) {

  const menuItemClassName = ({ hover }) => (hover ? 'my-menuitem-hover' : 'my-menuitem');

  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <div className="sharmutaMenu">
      <Menu menuStyle={{color: isDarkTheme ?" black" : "white", background: isDarkTheme ?"#F8FAFC" : "#14191F"}} menuButton={
          <button className="my-menu">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 11.6667H35" stroke={isDarkTheme ?" black" : "white"} strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M5 20H35" stroke={isDarkTheme ?" black" : "white"} strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M5 28.3333H35" stroke={isDarkTheme ?" black" : "white"} strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          </button>} menuClassName="menu-Design">
          
        
          <MenuItem>Discord Bot</MenuItem>
          <MenuItem>Fivem Scripts</MenuItem>
         
          <MenuItem type="checkbox" checked={isToggled} onClick={onToggle}>
            Dark Mode
          </MenuItem>
      </Menu>
    </div>
  );
}