# react-scroll-changer

A simple way to do things on scroll.

#### Demos

- [Demo site](https://react-scroll-changer.netlify.com/)

## Installation

```sh
npm install react-scroll-changer
```

## Overview & Basic Example

React Scroll Changer attempts to create an easy component to wrap components and affect them via scroll. A basic setup is something as follows.

app.jsx

```js
import React, { Component } from 'react';
import ScrollChanger from 'react-scroll-changer';

const View = ({ scrollAmount }) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#FCD06B",
      opacity: scrollAmount
    }}
  />
);

class App extends Component ({
  render() {
    return (
    <ScrollChanger
      children={<View length={2} />}
      start={1}
      end={0}
      length={2}
    />
    );
  },
});

```

The ScrollChanger component wraps a seperate view and passes down the scrollAmount function, which is transitions based on the start and end amounts stipulated.

### Props

| Name                       | Type            | Required | Note                                                                                                                                                                       |
| -------------------------- | --------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`                 | React Component | Yes      | The child element that will be within the scroll changer.                                                                                                                  |
| `attached (default: true)` | Boolean         | Yes      | Does the child element attach to the viewport on scroll? Or does it scroll naturally.                                                                                      |
| `start`                    | Number          | Yes      | The starting value of the scrollAmount.                                                                                                                                    |
| `startOffset (default: 0)` | Number          | Yes      | The offset in percentage points (eg., 0.3) in which to delay tracking from the top of the viewport.                                                                        |
| `end`                      | Number          | Yes      | The ending value of the scrollAmount.                                                                                                                                      |
| `endOffset (default: 0)`   | Number          | Yes      | The offset in percentage points (eg., 0.3) in which to speed up tracking from the bottom of the viewport.                                                                  |
| `length`                   | Number          | Yes      | Number of 100vh blocks to scroll. I.E., a length of 2 is 200vh of scrolling, 3 is 300vh, etc.                                                                              |
| `style`                    | Object          | No       | Style to apply to the inner wrapper                                                                                                                                        |
| `wrapperStyle`             | Object          | No       | Style to pass to the wrapper object that encapsulates the whole section                                                                                                    |
| `scrollOptions`            | Object          | No       | Scroll options to send to the below the surface react-scroll-percentage plugin. See [the docs](https://www.npmjs.com/package/react-scroll-percentage) for options to pass. |

### License

MIT
