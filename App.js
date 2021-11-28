import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} />
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute
});



export default function App() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Profile' },
    { key: 'second', title: 'Earnings' },
    { key: 'third', title: 'Taxes' },
    { key: 'fourth', title: 'Reports' }
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
