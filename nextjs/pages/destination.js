import React,{useState} from "react";
import DestinationData from "./destination_api";
import Header from "./header";
export default function Destination() {
  const [val, setVal] = useState(DestinationData);
  // let btnData = document.querySelectorAll('.btn_details_links');
  // let img_change = document.querySelector('.img_change_src');
  // let BigText = document.querySelector('.details_headline_child');
  function btnClick1(){
    // console.log('hellow world')
    document.querySelector('.img_change_src').src = '/image-moon.png';
    document.querySelector('.details_headline_child').innerHTML = 'MOON';
    
  }
  function btnClick2(){
    document.querySelector('.img_change_src').src = '/image-mars.png';
    document.querySelector('.details_headline_child').innerHTML = 'MARS';
  }
  function btnClick3(){
    document.querySelector('.img_change_src').src = '/image-europa.png';
    document.querySelector('.details_headline_child').innerHTML = 'EUROPA';
  }
  function btnClick4(){
    document.querySelector('.img_change_src').src = '/image-titan.png';
    document.querySelector('.details_headline_child').innerHTML = 'TITAN';
  }

  return (
    <>
      <Header />
      <section className="container_destination">
        <div className="moons_destination_father">
          <div className="moons_destination_left">
            <div className="details_moon_">
              <p className="changing_details_pageNumber">00</p>
              <p className="changing_details_destination">
                Pick your destination
              </p>
            </div>
            <img className="img_change_src" src="/image-moon.png" />
          </div>
          <div className="details_destination_right">
              <div className="details_links">
                    <div className="btn_details_father">
                        <button className="btn_details_links" value='moon'  onClick={btnClick1}>{val[0].name}</button>
                    </div>

                    <div className="btn_details_father">
                        <button className="btn_details_links" value='mars' onClick={btnClick2}>{val[1].name}</button>
                    </div>

                    <div className="btn_details_father">
                        <button className="btn_details_links" value='europa' onClick={btnClick3}>{val[2].name}</button>
                    </div>

                    <div className="btn_details_father">
                        <button className="btn_details_links" value='titan' onClick={btnClick4}>{val[3].name}</button>
                    </div>
                    
                    
              </div> 
              <div className="details_headline"> 
                <p className="details_headline_child">MOON</p>
              </div>  
              <div className="details_text">
                <p>
                Don't forget to pack your hiking boots. You'll need them<br/> to tackle Olympus Mons, the tallest planetary moutain in<br/> our solar system. It's two and a half times the size of<br/> Everest!
                </p>
              </div>  
              <div className='time_distance_info'>
                    <div className="distance_destination">
                        <p className="distance_destination_child _1">AVG. DISTANCE</p>
                        <p className="distance_destination_child _2">225 MILE. KM</p>
                    </div>
                    <div className="time_destination">
                        <p className="time_destination_child _1">EST. TRAVEL TIME</p>
                        <p className='time_destination_child _2'>9 MONTHS</p>
                    </div>
              </div> 
          </div>
        </div>
      </section>
    </>
  );
}
