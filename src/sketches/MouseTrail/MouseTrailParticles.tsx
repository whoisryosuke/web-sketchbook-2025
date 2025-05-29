import React from "react";
import { MouseTrailParticle } from "./types";
import styled from "styled-components";
import { motion } from "motion/react";
import { MOUSE_TRAIL_IMAGES, PARTICLE_DURATION } from "./constants";

const MouseTrailParticleContainer = styled.div`
  position: absolute;
  inset: 0;

  & div {
    position: absolute;
  }
`;

type Props = {
  particles: MouseTrailParticle[];
};

const MouseTrailParticles = ({ particles }: Props) => {
  return (
    <MouseTrailParticleContainer>
      {particles.map(({ time, x, y, image }) => (
        <motion.div
          key={time}
          initial={{
            x,
            y,
            scale: 0,
            rotate: 20,
          }}
          animate={{
            scale: [1, 0],
            rotate: [0, -20],
          }}
          transition={{
            duration: PARTICLE_DURATION / 1000 - 1,
          }}
        >
          <img
            src={`/art/${MOUSE_TRAIL_IMAGES[image]}`}
            width={300}
            height={"auto"}
          />
        </motion.div>
      ))}
    </MouseTrailParticleContainer>
  );
};

export default MouseTrailParticles;
