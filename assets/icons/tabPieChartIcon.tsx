import React from 'react';
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg';

type TabPieChartIconProps = {
  size?: number;
  color?: string;
};

const TabPieChartIcon = ({ size = 28, color, }: TabPieChartIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 682.667 682.667">
      <Defs>
        <ClipPath id="a">
          <Path d="M0 512h512V0H0Z" fill={color} />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
        <Path
          d="M0 0c0-66.496-26.992-126.746-70.613-170.387L-241 0Z"
          transform="translate(448.8 207.8)"
          fill="none"
          stroke={color}
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <Path
          d="m0 0 136.306-136.305C101.401-171.21 53.201-192.8 0-192.8c-106.401 0-192.8 86.399-192.8 192.8 0 106.402 86.399 192.8 192.8 192.8z"
          transform="translate(207.8 207.8)"
          fill="none"
          stroke={color}
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <Path
          d="M0 0c159.623 0 289.2-129.578 289.2-289.2H0Z"
          transform="translate(207.8 497)"
          fill="none"
          stroke={color}
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </G>
    </Svg>
  );
};

export default TabPieChartIcon;