import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { useMeasure, useSize, useWindowSize } from "react-use";
import { createPortal } from "react-dom";
import _ from "lodash";
import { useSpring } from "react-spring";

export default function Home() {
  const windowSize = useWindowSize();
  const [paperOne, setPaperOne] = useState({ top: 0, left: 0, width: 0 });
  const [maxVidWidth, setMaxVidWidth] = useState(false);
  const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure();

  useEffect(() => {
    if (windowSize.width >= 1920) {
      setMaxVidWidth(true);
    } else {
      setMaxVidWidth(false);
    }
    console.log(windowSize);
    console.log(windowSize.width * 0.172);
  }, [windowSize]);

  useEffect(() => {
    setPaperOne({
      width: `${_.clamp(windowSize.width * 0.2, 0, 370)}px`,
    });
  }, [windowSize.width]);

  return (
    <div className="bg-black" ref={ref}>
      <div className="relative">
        <video className="mx-auto" playsInline autoPlay loop muted>
          <source src="test.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute top-0 left-0 hover:bg-green-200"
          style={{
            width: paperOne.width,
          }}
        >
          {/* <div className="mx-auto text-center">hey</div> */}
          <svg className="relative" viewBox="0 0 352.86 63.33">
            <polygon
              style={{ fill: "red" }}
              className="cls-1"
              points="0 61.21 271.08 63.33 352.86 6.67 132.63 3.56 128.19 0 125.52 4.44 0 61.21"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
