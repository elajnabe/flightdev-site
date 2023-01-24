import React, { useState, useEffect} from "react";
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import Switch from "../darkmode/DarkMode";
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { ToggleHomePageMode } from '../home/home-page'
import { HomePage } from "../home/home-page";
import DropdownMenu from "../dropdown/DropdownMenu"

const darkTheme = {
  splitter: "10em",
  text: {
    color: "white",
  },
  background: {
    background: "#101418",
  },
  header: {
    icon: "#F8FAFC",
    height: "100px",
    padding: "15px 30px 0px",
    width: "83vw",
  },
  joinDiscord: {
    color: "#14191F",
    background: "#3396FF",
  },
}

const lightTheme = {
  splitter: "10em",
  text: {
    color: "black",
  },
  background: {
    background: "white",
  },
  header: {
    icon: "#14191F",
    height: "100px",
    padding: "15px 30px 0px",
    width: "83vw",
  },
  joinDiscord: {
    color: "#F8FAFC",
    background: "#0063CC",
  },
}

const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    document.body.style.backgroundColor = isDarkTheme ? darkTheme.background.background : lightTheme.background.background;
    document.body.style.color = isDarkTheme ? darkTheme.text.color : lightTheme.text.color;
  };

  return (
    <>
    <ThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
      <div className="hidextras">
        <div className = "cloud-b" style={{color: isDarkTheme ? "rgba(12, 50, 100, 0.301)" : "rgba(12, 50, 100, 0.301)"}}>
          <svg width="224" height="224" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.74 12.9099C21.48 12.0499 21.05 11.2999 20.48 10.6899C19.75 9.85986 18.78 9.28986 17.69 9.03986C17.14 6.53986 15.6 4.73986 13.41 4.06986C11.03 3.32986 8.27 4.04986 6.54 5.85986C5.02 7.44986 4.52 9.63986 5.11 11.9699C3.11 12.4599 2.12 14.1299 2.01 15.7199C2 15.8299 2 15.9299 2 16.0299C2 17.9099 3.23 20.0199 5.97 20.2199H16.35C17.77 20.2199 19.13 19.6899 20.17 18.7399C21.8 17.3099 22.4 15.0799 21.74 12.9099Z" fill="currentColor"/>
          </svg>
        </div>
        <div className = "cloud-b2" style={{color: isDarkTheme ? "rgba(12, 50, 100, 0.301)" : "rgba(12, 50, 100, 0.301)"}}>
          <svg width="224" height="224" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.74 12.9099C21.48 12.0499 21.05 11.2999 20.48 10.6899C19.75 9.85986 18.78 9.28986 17.69 9.03986C17.14 6.53986 15.6 4.73986 13.41 4.06986C11.03 3.32986 8.27 4.04986 6.54 5.85986C5.02 7.44986 4.52 9.63986 5.11 11.9699C3.11 12.4599 2.12 14.1299 2.01 15.7199C2 15.8299 2 15.9299 2 16.0299C2 17.9099 3.23 20.0199 5.97 20.2199H16.35C17.77 20.2199 19.13 19.6899 20.17 18.7399C21.8 17.3099 22.4 15.0799 21.74 12.9099Z" fill="currentColor"/>
          </svg>
        </div>
        <div className = "cloud-b3" style={{color: isDarkTheme ? "rgba(12, 50, 100, 0.301)" : "rgba(12, 50, 100, 0.301)"}}>
          <svg width="224" height="224" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.74 12.9099C21.48 12.0499 21.05 11.2999 20.48 10.6899C19.75 9.85986 18.78 9.28986 17.69 9.03986C17.14 6.53986 15.6 4.73986 13.41 4.06986C11.03 3.32986 8.27 4.04986 6.54 5.85986C5.02 7.44986 4.52 9.63986 5.11 11.9699C3.11 12.4599 2.12 14.1299 2.01 15.7199C2 15.8299 2 15.9299 2 16.0299C2 17.9099 3.23 20.0199 5.97 20.2199H16.35C17.77 20.2199 19.13 19.6899 20.17 18.7399C21.8 17.3099 22.4 15.0799 21.74 12.9099Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      <DropdownMenu toggleTheme = {toggleTheme} isDarkTheme = {isDarkTheme}/>
      <div className="parent-container">
        <Header isDarkMode={isDarkTheme}/>
          <Switch toggleTheme = {toggleTheme} isDarkTheme = {isDarkTheme}/>
        
        
      </div>
      <main>
        <HomePage isDarkMode={isDarkTheme}/>
      </main>
      <Footer isDarkMode={isDarkTheme}/>
    </ThemeProvider>
    </>
  );
};

export default MainLayout;
