import React, { useState, useEffect } from "react";
import Sticky from "react-sticky-el";
import PropTypes from "prop-types";
import "intersection-observer";
import { useScrollPercentage } from "react-scroll-percentage";

import "./styles.css";

function ScrollChanger({
  attached,
  children,
  start,
  end,
  startOffset,
  endOffset,
  length,
  scrollOptions,
  wrapperStyle,
  style
}) {
  const [ref, percentage] = useScrollPercentage({
    ...scrollOptions
  });

  const calculateAmount = (start, end, percentage) => {
    let amount =
      start - (start - end) * (percentage * (1 + endOffset) - startOffset);
    let max = start;
    let min = end;
    if (min > max) {
      min = start;
      max = end;
    }
    if (amount > max) {
      amount = max;
    }
    if (amount < min) {
      amount = min;
    }
    return amount;
  };

  return (
    <div
      ref={ref}
      className="scroll-changer__wrapper"
      style={{ height: length * 100 + "vh", ...wrapperStyle }}
    >
      <Sticky
        boundaryElement=".scroll-changer__wrapper"
        disabled={!attached}
        hideOnBoundaryHit={false}
      >
        <div
          style={{
            ...style
          }}
          className="scroll-changer__inner"
        >
          {React.cloneElement(children, {
            scrollAmount: calculateAmount(start, end, percentage)
          })}
        </div>
      </Sticky>
    </div>
  );
}

ScrollChanger.defaultProps = {
  attached: true,
  startOffset: 0,
  endOffset: 0
};

ScrollChanger.propTypes = {
  children: PropTypes.node.isRequired,
  attached: PropTypes.bool.isRequired,
  startOffset: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  endOffset: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  style: PropTypes.object,
  wrapperStyle: PropTypes.object,
  scrollOptions: PropTypes.object
};

export default ScrollChanger;
