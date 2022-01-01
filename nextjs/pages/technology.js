import React,{useState,useEffect} from "react";
import Header from "./header";
export default function Technology() {
  const[techBool, setTechBool] = useState(false);


  const mobileResize = () => {
    if (window.innerWidth < 800) {
      setTechBool(true);
      
    } else {
      setTechBool(false);
    }

  };


  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", mobileResize);
  });

  







  function one(){
    document.querySelector('.picture_tech').src = '/image-launch-vehicle-portrait.jpg';
    document.querySelector('._02_').innerHTML = 'LAUNCH VEHICLE';
  }
  function two(){
    document.querySelector('.picture_tech').src = '/image-space-capsule-portrait.jpg';
    document.querySelector('._02_').innerHTML = 'SPACE CAPSULE';
  }
  function three(){
    document.querySelector('.picture_tech').src = '/image-spaceport-portrait.jpg';
    document.querySelector('._02_').innerHTML = 'SPACEPORT';
  }
  return (
    <>
      <section>
        <Header />

        <div className="container_technology">
        <img className="image_bg_container_technology" src={techBool ? '/background-technology-tablet.jpg' : '/background-technology-desktop.jpg'} />
          <div className="child_container_technology">
            <div className="left_technology">
              <div className="top_p_text">
                <p className="_03">03</p>
                <p className="pick_your_destination">PICK YOUR DESTINATION</p>
              </div>
              <div className="left_details">
                <div className="left_details_btns">
                  <button className="btn_technology" onClick={one}>1</button>
                  <button className="btn_technology" onClick={two}>2</button>
                  <button className="btn_technology" onClick={three}>3</button>
                </div>
                <div className="left_details_aside">
                  <p className="_01_">THE TERMINOLOGY</p>
                  <div className="father_02_">
                    <p className="_02_">LAUNCH VEHICLE</p>
                  </div>
                  <p className="_03_">
                    A launch vehicle or carrier rocket is a rochet-propelled
                    <br /> vehicle used to carry a payload from Earth's surface
                    to
                    <br /> space. usually to Earch orbit or beyond. Our WEB-X
                    <br />
                    carrier rocket is the most powerful in operation.
                    <br />
                    Standing 150 metres tall. it's quite an awe-inspiring sight<br/>
                    on the launch pad!
                  </p>
                </div>
              </div>
            </div>

            <div className="right_technology">
                <div className="picture_container_right_technology">
                    <img className="picture_tech" src="/image-launch-vehicle-portrait.jpg" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
