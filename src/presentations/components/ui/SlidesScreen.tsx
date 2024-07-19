/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';

import {
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {colors, globalStyles} from '../../../config/theme/theme';
import {Text} from 'react-native';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

export const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

const SlidesScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  const navigation = useNavigation();

  const onScroll = (ev: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement} = ev.nativeEvent;

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        onScroll={onScroll}
      />

      {currentSlideIndex === items.length - 1 ? (
        <Button
          text="End"
          style={{position: 'absolute', bottom: 60, right: 30, width: 100}}
          onPress={() => {
            navigation.goBack();
          }}
        />
      ) : (
        <Button
          text="Next"
          style={{position: 'absolute', bottom: 60, right: 30, width: 100}}
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
        />
      )}
    </View>
  );
};

export default SlidesScreen;

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({item}: SlideItemProps) => {
  const {img} = item;

  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 5,
        justifyContent: 'center',
        width: width,
      }}>
      <Image
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignItems: 'center',
        }}
        source={img}
      />

      <Text style={[globalStyles.title, {color: colors.primary}]}>
        {item.title}
      </Text>
      <Text style={{color: colors.text, marginTop: 20}}>{item.desc}</Text>
    </View>
  );
};
