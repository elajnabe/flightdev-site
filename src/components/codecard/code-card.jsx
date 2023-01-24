import React, { useState } from "react";
import Image from 'next/image';

export const CodeCard = ({isDarkMode, icon, title, description, link, linkLabel, width, height}) => {
    return (
        <div className="card">
            <div className="content">
                <p className="pushUp">
                {description}
                </p>           

            </div>

            <div className="header" style={{background: isDarkMode ? "#F8FAFC":"#14191F"}}>
                <div className="img-box">
                    <Image alt="logo" src={icon} width={width || 700} height={height || 700} />
                </div>
                <h1 className="title">{title}</h1>
            </div>            
        </div>
    );
};
  