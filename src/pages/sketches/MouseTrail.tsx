import SketchPage from "@/components/SketchPage/SketchPage";
import MouseTrailPage from "@/sketches/MouseTrail/MouseTrailPage";
import React from "react";

type Props = {};

const MouseTrail = (props: Props) => {
  return (
    <SketchPage title="Mouse Trail Cursor">
      <MouseTrailPage />
    </SketchPage>
  );
};

export default MouseTrail;
