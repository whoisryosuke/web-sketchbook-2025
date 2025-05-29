import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Coordinate2D, MouseTrailParticle } from "./types";
// import MouseTrailParticles from "./MouseTrailParticles";
import dynamic from "next/dynamic";
import { MOUSE_TRAIL_IMAGES, PARTICLE_DURATION } from "./constants";
const MouseTrailParticles = dynamic(() => import("./MouseTrailParticles"));

const InteractiveZoneContainer = styled.div`
  width: 100%;
  flex: 1;
  background: darkblue;
  position: relative;
`;

type Props = {};

const InteractiveZone = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<MouseTrailParticle[]>([]);
  const lastPosition = useRef<Coordinate2D>({
    x: 0,
    y: 0,
  });

  const spawnParticle = (x: number, y: number) => {
    // console.log("[MOUSE TRAIL] Spawning particle", x, y);
    const newParticle: MouseTrailParticle = {
      time: Date.now(),
      // We subtract image width from coordinate to center it on mouse cursor
      x: x - 200,
      y: y - 200,
      image: Math.max(
        Math.round(Math.random() * MOUSE_TRAIL_IMAGES.length - 1),
        0
      ),
    };
    setParticles((prevParticles) => [...prevParticles, newParticle]);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const containerSize = containerRef.current.getBoundingClientRect();

    // console.log("mouse inside", e.clientX, e.clientY);

    // Check if distance is great enough to spawn something
    const distanceX = Math.abs(lastPosition.current.x - e.clientX);
    const distanceY = Math.abs(lastPosition.current.y - e.clientY);
    const traveledFarEnough = distanceX + distanceY > 100;

    // Spawn particle if traveled far enough
    if (traveledFarEnough) {
      spawnParticle(e.clientX, e.clientY);
      // Sync last position
      lastPosition.current.x = e.clientX;
      lastPosition.current.y = e.clientY;
    }
  };

  const destroyParticles = () => {
    setParticles((prevParticles) => {
      const now = Date.now();
      console.log("[MOUSE TRAIL] Destroying particles", now);
      return prevParticles.filter(
        (particle) => particle.time + PARTICLE_DURATION > now
      );
    });
  };

  useEffect(() => {
    let interval = setInterval(destroyParticles, PARTICLE_DURATION);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <InteractiveZoneContainer ref={containerRef} onMouseMove={handleMouseMove}>
      <MouseTrailParticles particles={particles} />
    </InteractiveZoneContainer>
  );
};

export default InteractiveZone;
