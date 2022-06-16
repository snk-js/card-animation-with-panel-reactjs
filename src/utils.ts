function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// These two are just helpers, they curate spring data, values that are later being interpolated into css
export const to = ({
  i,
  xV,
  yV,
  sC,
  rot,
  delay,
}: {
  i: number;
  xV: number;
  yV: number;
  sC: number;
  rot: number;
  delay: number;
}) => ({
  x: xV * i,
  y: yV * i,
  scale: sC,
  rot: -10 + Math.random() * rot,
  delay: i * delay,
});
export const from = (_i: number) => ({ x: -500, rot: 0, scale: 2, y: -10000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
export const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;
