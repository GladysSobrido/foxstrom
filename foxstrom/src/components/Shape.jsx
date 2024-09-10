export function Shape({
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
    "M 146.5,1.5 C 201.363,0.544049 255.696,5.37738 309.5,16C 343.25,22.7167 374.917,34.7167 404.5,52C 440.851,75.7022 466.017,108.202 480,149.5C 496.982,198.725 505.982,249.392 507,301.5C 508.263,367.532 505.763,433.365 499.5,499C 433.681,506.096 367.681,509.096 301.5,508C 251.024,506.866 202.024,497.866 154.5,481C 93.1113,457.944 51.6113,415.444 30,353.5C 13.6677,304.841 4.66774,254.841 3,203.5C 1.33452,156.72 2.83452,110.053 7.5,63.5C 26.8383,64.4114 46.1716,65.4114 65.5,66.5C 64.4114,46.5044 63.4114,26.5044 62.5,6.5C 90.6193,4.23472 118.619,2.56806 146.5,1.5 Z";

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
