import React from "react";

/**
 * ? Exported the Figma player button image as an SVG and formatted it using SVGR
 */
const ButtonSvg: React.FC = ({}) => {
  return (
    <svg
      width={199}
      height={200}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#prefix__filter0_d_8_206)">
        <circle
          cx={99.426}
          cy={73.14}
          r={58.365}
          fill="url(#prefix__paint0_linear_8_206)"
        />
      </g>
      <path
        d="M109.224 72.951v.4a1.078 1.078 0 01-.516.926L96.23 81.703c-.753.456-1.143.456-1.478.256l-.349-.2a1.073 1.073 0 01-.37-.38 1.101 1.101 0 01-.145-.517V65.44c0-.187.048-.37.138-.533.09-.162.22-.298.377-.394l.349-.2c.335-.199.725-.199 1.701.386l12.255 7.326a1.079 1.079 0 01.516.926z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_8_206"
          x1={46.604}
          y1={99.877}
          x2={116.965}
          y2={20.039}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD154D" />
          <stop offset={0.59} stopColor="#FD0036" />
          <stop offset={1} stopColor="#FF5100" />
        </linearGradient>
        <filter
          id="prefix__filter0_d_8_206"
          x={0.061}
          y={0.775}
          width={198.73}
          height={198.73}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={5}
            in="SourceAlpha"
            result="effect1_dropShadow_8_206"
          />
          <feOffset dy={27} />
          <feGaussianBlur stdDeviation={23} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_8_206" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_8_206"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ButtonSvg;
