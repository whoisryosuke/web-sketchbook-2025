import React from "react";
import InteractiveZone from "./InteractiveZone";
import styled from "styled-components";

const MouseTrailPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

type Props = {};

const MouseTrailPage = (props: Props) => {
  return (
    <MouseTrailPageContainer>
      <InteractiveZone />
    </MouseTrailPageContainer>
  );
};

export default MouseTrailPage;
