import React, { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [bool, setBool] = useState(true);
  function menuBar_change() {
    document.querySelector(".theMenu").style.display = "flex";
    // setBool(true);
  }

  function menuBar_close() {
    document.querySelector(".theMenu").style.display = "none";
  }
  return (
    <>
      <section className="navbar">
        <div className="logo_line">
          <div className="logo same_">
            <img src="./logo.png" />
          </div>
          <div className="line_father">
            <div className="line"></div>
          </div>
        </div>
        <div className="father_links_parent_forBlur">
          <div className="links_parent_forBlur">
            <img src="/background-home-desktop.jpg" />
          </div>
        </div>
        <div className="father_links_parent_header">
          <div className="links_parent">
            <div className="links">
              <Link href="/">
                <div className="number_links">
                  <p>00</p>
                  <p className="link_links">HOME</p>
                </div>
              </Link>

              <Link href="/destination">
                <div className="number_links">
                  <p>01</p>
                  <p className="link_links">DESTINATION</p>
                </div>
              </Link>
              <Link href="/crew">
                <div className="number_links">
                  <p>02</p>
                  <p className="link_links">CREW</p>
                </div>
              </Link>
              <Link href="/technology">
                <div className="number_links">
                  <p>03</p>
                  <p className="link_links">TECHNOLOGY</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="menu_none">
          <button className="menu_links_btn" onClick={menuBar_change}>
            menu
          </button>
          <div className="theMenu">
            <div className="menu_content_header">
              <button className="menu_links_btn" onClick={menuBar_close}>
                menu
              </button>
              <div className="menu_links">
                <Link href="/">HOME</Link>
              </div>
              <div className="menu_links">
                <Link href="/destination">DESTINATION</Link>
              </div>
              <div className="menu_links">
                <Link href="/crew">CREW</Link>
              </div>
              <div className="menu_links">
                <Link href="/technology">TECHNOLOGY</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
