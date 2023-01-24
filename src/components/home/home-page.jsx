import Image from 'next/image';
import React from "react";
import styled from "styled-components";
import { CodeCard } from '../codecard/code-card';

const Body1 = styled.div`
  margin-bottom: ${(props => [props.theme.splitter])};
`;

const Body2 = styled.div`
  margin-bottom: ${(props => [props.theme.splitter])};
`;

const ContactUs = styled.button`
  background: ${(props => [props.theme.joinDiscord.background])};
`;

const ContactUsText = styled.span`
  color: ${(props => [props.theme.joinDiscord.color])};
`

export const HomePage = ({isDarkMode}) => {
  
  return (
    <div>
      <Body1 className='home-body-space'>
        <div className ="home_section1">  
          <div className="home_init"> We make your dreams a 
            <span className = "home_init_special"> reality. </span> 
            <div className = "home_init_sub">
              Specialized in fivem resources, discord bots, and web development.
            </div> 
          </div>
          <div className = "section1_img"> 
            <img alt="logo" src={'/images/yes.png'} className='section1_img_src' /> 
          </div>
        </div>
        <ContactUs className = "home-contactus" onClick={() => window.open( 'https://discord.gg/dXzkPaRaq3','popUpWindow','height=600,width=400,left=50,top=50,scrollbars=no,menubar=no')}>
          <div className = "home-contactus-icon-1">
            <div className = "home-contactus-icon">
              <svg  width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z" stroke={isDarkMode ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 12.86C22 15.15 20.82 17.18 19 18.46L17.66 21.41C17.35 22.08 16.45 22.21 15.98 21.64L14.5 19.86C12.08 19.86 9.92001 18.79 8.57001 17.12L9.5 16C13.64 16 17 12.87 17 9C17 7.95 16.75 6.96001 16.3 6.07001C19.57 6.82001 22 9.57999 22 12.86Z" stroke={isDarkMode ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 9H12" stroke={isDarkMode ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <ContactUsText className ="space-text-logo">Contact us</ContactUsText>
        </ContactUs>
      </Body1>
      <Body2>
        <button data-text="Awesome" className={isDarkMode ? "title-body-2-light" : "title-body-2-dark"}>
          <span>&nbsp;Fields&nbsp;of&nbsp;work&nbsp;</span>
          <span className="hover-text" aria-hidden="true">&nbsp;Fields&nbsp;of&nbsp;work&nbsp;</span>
        </button>
        <div className="card-sorting">
          <CodeCard isDarkMode={isDarkMode} icon={'/images/webdev.png'} title={"Web Development"} description={`- Fullstack web development\n\n- Can work in all requested frameworks.`} linkLabel={"Contact Us"} />

          <CodeCard isDarkMode={isDarkMode} icon={'/images/discord.png'} title={"Bot Development"} description={`- Discord bot services (Public, Premium, Pro...) \n\n - Custom Discord Bots `} width={800} height={780} linkLabel={"Contact Us"}/>

          <CodeCard isDarkMode={isDarkMode} icon={'/images/FiveM-Logo.png'} title={"Fivem Development"} description={`- Fullstack fivem development\n\n- Can work in all requested frameworks.`} linkLabel={"Contact Us"}/>

          <CodeCard isDarkMode={isDarkMode} icon={'/images/psd.png'} title={"Graphic Design"} description={`- Creating logos `} linkLabel={"Contact Us"}/>

          <CodeCard isDarkMode={isDarkMode} icon={'/images/ae.png'} title={"Video Editing"} description={`- Creating Videos `} linkLabel={"Contact Us"}/>
        </div>
      </Body2>
    </div>
  );
};
