import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, SafeAreaView } from 'react-native';
import { TabView, TabBar, TabBarIndicator, SceneMap } from 'react-native-tab-view';


import Profile from '../PAYECalculatorApp/components/Profile';
import Earnings from './components/Earnings';
import Taxes from './components/Taxes';
import Reports from './components/Reports';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <Profile />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <Earnings />
  </View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <Taxes />
  </View>
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <Reports />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute
});

const renderTabBar = props => (
  <TabBar
    {...props}
    activeColor={'black'}
    inactiveColor={{ color: '#cccccc', backgroundColor: 'darkgrey' }}
    style={{ marginTop: 25, backgroundColor: '#fff', color: 'black' }}
    indicatorStyle={{
      backgroundColor: '#00bcd4',
      height: 3,
      position: 'absolute',
      top: 0
    }}
    renderLable={(route, focused, color) => (
      <Text style={{ color: 'black', margin: 8 }}>
        {route.title}
      </Text>
    )}
  />

);


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
    <SafeAreaView style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>

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
