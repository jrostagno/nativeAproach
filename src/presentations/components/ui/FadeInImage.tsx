/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
  url: string;
  style: StyleProp<ImageStyle>;
}

export const FadeInImage = ({url, style}: Props) => {
  const {animatedOpacity, fadeIn} = useAnimation();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="gray"
          size={30}
        />
      )}
      <Animated.Image
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
        source={{uri: url}}
        style={[style, {opacity: animatedOpacity}]}
      />
    </View>
  );
};
