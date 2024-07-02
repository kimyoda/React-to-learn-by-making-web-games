import React, { memo } from "react";

// Ball 함수 컴포넌트(Hook은 useState, useRef, useEfeect 등)
// PureCompoent와 비슷한 기능 memo, 고차 컴포넌트, HOC
const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = "red";
  } else if (number <= 20) {
    background = "orange";
  } else if (number <= 30) {
    background = "yellow";
  } else if (number <= 40) {
    background = "blue";
  } else {
    background = "pink";
  }
  return (
    <div className="ball" style={{ background }}>
      {number}
    </div>
  );
});

export default Ball;
