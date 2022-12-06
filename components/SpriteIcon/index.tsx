import React, { FC, SVGProps } from 'react';

interface SpriteIconProps extends SVGProps<SVGSVGElement> {
  symbolId: string;
}

const SpriteIcon: FC<SpriteIconProps> = ({ symbolId, ...svgProps }) => {
  return (
    <svg {...svgProps}>
      <use xlinkHref={`#${symbolId}`}></use>
    </svg>
  );
};

export default SpriteIcon;
