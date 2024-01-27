import React from 'react';
import Svg, { G, Path, Rect } from 'react-native-svg';

const RouteIcon = ({ color, size }) => (
  <Svg height={size} viewBox="0 0 24 24" width={size} fill={color}>
    <G>
      <Rect fill="none" height="24" width="24"/>
    </G>
    <G>
      <G>
        <Path d="M19,15.18V7c0-2.21-1.79-4-4-4s-4,1.79-4,4v10c0,1.1-0.9,2-2,2s-2-0.9-2-2V8.82C8.16,8.4,9,7.3,9,6c0-1.66-1.34-3-3-3 S3,4.34,3,6c0,1.3,0.84,2.4,2,2.82V17c0,2.21,1.79,4,4,4s4-1.79,4-4V7c0-1.1,0.9-2,2-2s2,0.9,2,2v8.18c-1.16,0.41-2,1.51-2,2.82 c0,1.66,1.34,3,3,3s3-1.34,3-3C21,16.7,20.16,15.6,19,15.18z"/>
      </G>
    </G>
  </Svg>
);

export default RouteIcon;
