import React, {useState} from 'react';

import Title from '../../components/ui/Title';
import {ScrollView} from 'react-native-gesture-handler';
import {RefreshControl} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, globalStyles} from '../../../config/theme/theme';

const PullToRefresh = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 4000);
  };

  return (
    <ScrollView
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          onRefresh={onRefresh}
          colors={[colors.primary, 'orange', 'red', 'green']}
        />
      }>
      <Title text="pull to refresh" safe />
    </ScrollView>
  );
};

export default PullToRefresh;
