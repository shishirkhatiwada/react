import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

import "../stylescomps/style.css";
const Loader = () => {
  useGSAP(() => {
    // GSAP animation timeline
    const tl = gsap.timeline();

    tl.from("#loader h3", {
      x: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });

    tl.to("#loader h3", {
      opacity: 0,
      x: -20,
      duration: 1,
      stagger: 0.1,
    });

    tl.to("#loader", {
      opacity: 0,
    });

    tl.to("#loader", {
      display: "none",
    });

    tl.from(".page1-content h1 span", {
      y: 300,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
    });

    tl.from(".page1-content h3 ", {
      x: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
    });

    tl.from(".box-1 ", {
      y: 50,
      opacity: 0,
      duration: 1,
    });

    const page1content = document.querySelector(".page1-content");
    const cursor = document.querySelector("#cursor");

    page1content.addEventListener("mousemove", (event) => {
      gsap.to(cursor, {
        x: event.x,
        y: event.y,
      });
    });

    page1content.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    });

    page1content.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });

    return () => {
      page1content.removeEventListener("mousemove", () => {});
      page1content.removeEventListener("mouseenter", () => {});
      page1content.removeEventListener("mouseleave", () => {});
    };
  });

  return (
    <div>
      {/* Loader */}
      <div id="loader">
        <h3>Welcome</h3>
        <h3>to</h3>
        <h3>SPARKX</h3>
      </div>

      {/* Main Content */}
      <div className="main">
        <div className="page-1">
          <div id="cursor">
            <h5>sparkx</h5>
          </div>
          <div className="page1-content">
            <nav>
              <h2>SPARKX</h2>
            </nav>
            <h3>WELCOME</h3>
            <h3>TO</h3>
            <h3>SPARKX</h3>

            <div className="box-1">
              <div className="btn btn-one">
                <Link to="/login">Sign In</Link>
              </div>
            </div>
            <h1>
              <span>s</span>
              <span>p</span>
              <span>a</span>
              <span>r</span>
              <span>k</span>
              <span>x</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
