import Link from 'next/link';
import Image from 'next/image';
import { FaDiscord } from 'react-icons/fa';
import styled from "styled-components";

// #F8FAFC

const Text = styled.div`
  color: ${(props => [props.theme.text.color])};
  transition: ${(props => [props.theme.joinDiscord.transition])};
`

const SHARMUTA = styled.button`
  color: ${(props => [props.theme.joinDiscord.color])};
  background: ${(props => [props.theme.joinDiscord.background])};
`;



export const Header = ({isDarkMode}) => {

  return (      
        <Text>
          <header className='initHeader'>
            <div>
              <div className="topNav">
                <div className="imagehead">
                  <Link href="/" passHref>
                    <img alt="logo" src={isDarkMode ? '/images/logoflightdark.png' : '/images/logoflightlight.png'} className="imageHeader" />
                  </Link>
                </div>
                <Link href="/" passHref><div className="title"> Flight Development</div></Link>
                
                <nav>
                  <ul>
                    
                    <li className={isDarkMode ? "liLight" : "liDark"}>
                      <Link href="/" passHref>
                        <div> Home</div>
                      </Link>
                    </li>
                    <li className={isDarkMode ? "liLight" : "liDark"}>
                      <Link href="https://fivem.flightdev.co" passHref>
                        <div> Fivem Scripts</div>
                      </Link>
                    </li>
                    <li className={isDarkMode ? "liLight" : "liDark"}>
                      <Link href="/about-us" passHref>
                        <div> Discord Bot</div>
                      </Link>
                    </li>
                    {/* <SHARMUTA className ={isDarkTheme ? "discordButtonDark" : "discordButtonLight"} onClick={() => window.open( 'https://discord.gg/dXzkPaRaq3','popUpWindow','height=600,width=400,left=50,top=50,scrollbars=no,menubar=no')} >
                        <div>  Contact us </div>
                    </SHARMUTA> */}
                    
                    
                    <SHARMUTA className="button-discord" onClick={() => window.open( 'https://discord.gg/dXzkPaRaq3','popUpWindow','height=600,width=400,left=50,top=50,scrollbars=no,menubar=no')}>
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <FaDiscord className='iconDiscord'/>
                        </div>
                      </div>
                      <span>Contact us</span>
                    </SHARMUTA>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        </Text>
  );
};
