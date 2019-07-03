import React from "react";
import { render } from "react-dom";

import ScrollChanger from "../../src";

import resetCss from "./reset.css";

const Demo = () => (
  <div>
    <h1>Scroll Changer</h1>
    <ScrollChanger
      children={<ViewOne />}
      property="scale"
      startOffset={0.33}
      start={1}
      end={0.7}
      length={2}
    />
    <ScrollChanger
      children={<ViewTwo />}
      wrapperStyle={{ backgroundColor: "blue" }}
      property="opacity"
      start={1}
      end={0}
      length={2}
    />
    <ScrollChanger
      attached={false}
      children={
        <div
          style={{
            width: "100%",
            height: "200vh",
            backgroundColor: "gray"
          }}
        >
          <h1>not attached divs scroll</h1>
        </div>
      }
      property="opacity"
      start={1}
      end={0}
      endOffset={0.5}
      length={2}
    />
  </div>
);

const ViewOne = ({ scrollAmount }) => (
  <img
    src="https://images.unsplash.com/photo-1562038257-9daf8958d911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    height="100%"
    width="100%"
    style={{
      transform: "scale3d(" + scrollAmount + ", " + scrollAmount + ", 1)"
    }}
  />
);

const ViewTwo = ({ scrollAmount }) => (
  <div style={{ position: "relative" }}>
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "red",
        opacity: scrollAmount
      }}
    />
    <h1 style={{ position: "relative", paddingTop: "25vh" }}>
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
      opacity: scrollAmount
    }}
  >
    <h1>not attached divs scroll</h1>
  </div>
);

render(<Demo />, document.querySelector("#demo"));
