import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

// interface Props {
//   animatedTopValue?: number;
//   animatedOpacityValue?: number;
// }

export const useAnimation = () => {
  // const {animatedTopValue = -100, animatedOpacityValue = 0} = props;

  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const startMovingTopPosition = ({
    initialPosition = 0,
    toValue = 0,
    duration = 300,
    easing = Easing.linear,
    callBack = () => {},
  }) => {
    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      easing: easing,
      useNativeDriver: true,
    }).start(callBack);
  };

  const fadeIn = ({duration = 300, toValue = 1, callBack = () => {}}) => {
    // Animated.timing(animatedTop, {
    //   toValue: 0,
    //   duration: 700,
    //   useNativeDriver: true,
    //   easing: Easing.bounce, //Easing.elastic(1),
    // }).start(() => console.log('end animation'));

    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callBack);
  };

  const fadeOut = ({duration = 300, toValue = 1, callBack = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callBack);

    animatedTop.resetAnimation();
  };

  return {
    //properties
    animatedOpacity,
    animatedTop,
    //functions
    fadeOut,
    fadeIn,
    startMovingTopPosition,
  };
};
