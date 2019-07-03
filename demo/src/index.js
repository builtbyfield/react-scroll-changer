import React from "react";
import { render } from "react-dom";

import ScrollChanger from "../../src";

import resetCss from "./reset.css";

const Demo = () => (
  <div>
    <div style={{ minHeight: "100vh", padding: "20vmin" }}>
      <h1>scroll changer</h1>
      <p>the simple tool for making things happen on scroll</p>
    </div>
    <ScrollChanger
      children={<ViewZero length={2} />}
      start={0}
      end={40}
      length={3}
    />
    <ScrollChanger
      children={<ViewOne />}
      start={1}
      startOffset={0.3}
      end={0}
      endOffset={0.3}
      length={2}
    />
    <ScrollChanger
      children={<ViewTwo />}
      wrapperStyle={{ backgroundColor: "#595C5B" }}
      startOffset={0.3}
      start={1}
      end={0}
      length={2}
    />
    <ScrollChanger
      attached={false}
      children={<ViewThree />}
      start={1}
      end={0}
      endOffset={0.5}
      length={2}
    />
    <div style={{ minHeight: "75vh", padding: "10vmin" }}>
      <h1>get scrolling</h1>
      <a href="https://github.com/builtbyfield/react-scroll-changer">
        view on git
      </a>
    </div>
  </div>
);

const ViewZero = ({ scrollAmount }) => (
  <div style={{ position: "relative" }}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ overflow: "hidden" }}
    >
      {/* <svg width="102" height="103" viewBox="0 0 102 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M101 36C101 36 44 42 1 1.99999V102H101V36Z" stroke="black"/>
</svg> */}
      <path
        d={
          "M100 " +
          scrollAmount +
          "C100 " +
          scrollAmount +
          " " +
          scrollAmount * 1.05 +
          " " +
          scrollAmount * 1.02 +
          " 0 1V100H100V36Z"
        }
        fill="#FCD06B"
      />
    </svg>
    <div
      style={{
        position: "absolute",
        padding: "10vmin",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transform: "translate3d(0, " + (50 - scrollAmount) + "%, 0)"
      }}
    >
      <h1>some stuff changes while you scroll</h1>
    </div>
  </div>
);

const ViewOne = ({ scrollAmount }) => (
  <div
    style={{
      height: "100%",
      width: "100%",
      position: "relative"
    }}
  >
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#000000",
        transform:
          "scale3d(" +
          (0.5 + (1 - scrollAmount)) +
          ", " +
          (0.5 + (1 - scrollAmount)) +
          ", 1)"
      }}
    >
      <div
        // src="https://images.unsplash.com/photo-1562038257-9daf8958d911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#595C5B",
          transformOrigin: "left center",
          transform: "scale3d(" + scrollAmount + ", 1 , 1)"
        }}
      />
    </div>
    <div
      style={{
        position: "absolute",
        padding: "10vmin",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transform: "translate3d(0, " + (75 - (50 - scrollAmount * 50)) + "%, 0)"
      }}
    >
      <h1 style={{ color: "white" }}>super duper cool</h1>
    </div>
  </div>
);

const ViewTwo = ({ scrollAmount }) => (
  <div style={{ position: "relative", padding: "10vmin" }}>
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FCD06B",
        opacity: scrollAmount
      }}
    />
    <h1 style={{ position: "relative" }}>
      attached divs keep content in view while scrolling
    </h1>
  </div>
);

const ViewThree = ({ scrollAmount }) => (
  <div
    style={{
      width: "100%",
      height: "200vh",
      backgroundColor: "gray",
      opacity: scrollAmount,
      padding: "10vmin"
    }}
  >
    <h1>not attached divs scroll</h1>
    <h1>scroll</h1>
    <h1>scroll</h1>
    <h1>scroll</h1>
    <h1>scroll</h1>
    <h1>scroll</h1>
    <h1>scroll</h1>
    <h1>scroll</h1>
  </div>
);

render(<Demo />, document.querySelector("#demo"));
