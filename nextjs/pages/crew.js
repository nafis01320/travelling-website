import React from "react";
import Header from "./header";
export default function Crew() {
  return (
    <>
      <body id="picture_bg_crew">
        <Header />
        <div><img className="img_picture_bg_crew" src="/background-crew-desktop.jpg"/></div>
        <div className="container_crew">
          <div className="all_details_crew">
            <div className="text_details_crew">
              <div className="_02_crew_text">
                <p className="_02_crew">02</p>
                <p className="_02_text">MEET YOUR CREW</p>
              </div>
              <div className="all_p_crew">
                <p className="flight_engineer">FLIGHT ENGINEER</p>
                <div className="ansari_div_crew">
                  <p className="anousheh_ansari">ANOUSHEH ANSARI</p>
                </div>
                <p className="mass_text">
                  Anousheh Ansari is an iranian American engineer and co-
                  <br />
                  founder of Prodea Systems. Ansari was the fourth self-
                  <br />
                  funded space tourist, the first self-funcded women to fly
                  <br />
                  to the ISS, and the first Iranian in space.
                </p>
              </div>
            </div>
            <div className="ansari_father_crew">
              <div className="ansari_pic_crew">
                <img src="/image-anousheh-ansari.png" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
