export function Shape3({
  shapeWidth,
  shapeHeigth,
  viewBox,
  imgHref,
  imgHeight,
  imgWidth,
  imgX,
  imgY,
}) {
  const path =
    "M32.405 18.481 L 32.405 32.405 18.456 32.405 L 4.507 32.405 4.694 87.468 C 4.895 146.673,4.862 145.869,7.636 159.241 C 18.422 211.231,55.259 245.361,109.367 253.496 C 120.942 255.237,272.010 254.988,317.215 253.154 C 364.979 251.217,383.337 248.800,386.821 243.991 C 390.587 238.791,392.832 226.483,393.909 205.116 C 394.580 191.816,394.591 118.989,393.923 111.646 C 388.190 48.614,355.077 12.006,297.725 5.297 C 292.333 4.666,272.272 4.557,161.902 4.557 L 32.405 4.557 32.405 18.481 ";

  return (
    <div>
      <svg
        width={shapeWidth}
        height={shapeHeigth}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="Path1" d={path} fill="none" />

        <clipPath id="cp1">
          <use href="#Path1" />
        </clipPath>

        <image
          clipPath="url(#cp1)"
          href={imgHref}
          width={imgWidth}
          height={imgHeight}
          x={imgX}
          y={imgY}
        />
      </svg>
    </div>
  );
}
