import React, { useState, useEffect } from "react";
import Header from "./header";

import Link from "next/link";

export default function Index() {
  // function getWindowDimensions(){
  //   const {innerWidth: width} = window;
  //   return width;
  // }
  const [bool, setBool] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const[mobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

  };


  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });


  //choose the screen size
  const mobileResize = () => {
    if (window.innerWidth < 450) {
      setMobile(true);
      
    } else {
      setMobile(false);
    }

  };


  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", mobileResize);
  });

  function mobileView(){
    setBool(false);
    
    
  }

  

  return (
    <>
      <Header />
      
      <div className="home_page_bg-1">
        <img className="img_home_page_bg" src={isMobile ? '/background-home-tablet.jpg' : '/background-home-desktop.jpg'} />
      </div>
      <div className="home_page">
        <div className="home_page_child">
          <div className="home_page_left">
            <p className="heading_txt">SO, YOU WANT TO TRAVEL TO</p>
            <p className="big_txt">SPACE</p>
            <p className="detailed_txt">
              Let's face it: if you want to go to space, you might as well
              <br />
              genuinely go to outer space and not-hover kind of on the
              <br />
              edge of it. Well sit back, and relax because we'll give you
              <br /> a truly out of this world experience!
            </p>
          </div>
          <div className="home_page_right">
            <div className="btn_home_page_right_father">
              <button className="btn_home_page_right">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
