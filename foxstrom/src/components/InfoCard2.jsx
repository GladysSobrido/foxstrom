export function InfoCard2({
  title,
  text,
  imgHref,
  imgWidth,
  height,
  imgX,
  imgY,
}) {
  // imgHref, title, text
  const path =
    "M236.863 2.871 C 91.919 12.888,31.458 56.973,8.999 169.020 C -0.998 218.891,-1.758 282.697,6.556 374.085 L 8.235 392.549 20.392 393.484 C 183.468 406.022,271.636 394.239,327.289 352.472 C 370.659 319.921,393.898 252.959,397.662 149.689 C 398.734 120.283,396.245 51.777,394.020 49.459 C 393.838 49.269,383.453 49.760,370.942 50.550 C 358.432 51.340,347.976 51.766,347.707 51.497 C 347.438 51.228,347.864 41.125,348.654 29.046 C 349.443 16.966,349.937 6.939,349.751 6.762 C 349.247 6.285,324.570 4.022,310.196 3.134 C 298.980 2.441,245.841 2.250,236.863 2.871 ";
  // "M158.261 11.508 C 97.197 22.522,53.089 54.834,28.800 106.345 C 10.613 144.916,6.877 179.850,10.127 280.952 C 13.193 376.316,14.802 380.110,54.806 386.284 C 76.401 389.616,219.316 389.724,238.261 386.422 C 310.997 373.745,362.415 328.089,382.598 258.261 C 388.651 237.319,389.510 224.521,390.687 137.826 L 391.873 50.435 369.849 50.435 L 347.826 50.435 347.826 29.565 L 347.826 8.696 259.565 8.925 C 193.829 9.096,167.976 9.755,158.261 11.508 ";

  return (
    <div>
      <svg
        width="400"
        height="400"
        viewBox="50 -20 310 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="Path2" d={path} fill="none" />

        <clipPath id="cp2">
          <use href="#Path2" />
        </clipPath>

        <image
          clipPath="url(#cp2)"
          href={imgHref}
          width={imgWidth}
          height={height}
          x={imgX}
          y={imgY}
        />
      </svg>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
