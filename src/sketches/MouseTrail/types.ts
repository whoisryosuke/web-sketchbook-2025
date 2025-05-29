export type Coordinate2D = {
  x: number;
  y: number;
};

export type MouseTrailParticle = Coordinate2D & {
  time: number;
  image: number;
};
