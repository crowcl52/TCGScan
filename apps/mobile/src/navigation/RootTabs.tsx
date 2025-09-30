import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScanScreen } from '../features/scan/ScanScreen';
import { CollectionScreen } from '../features/collection/CollectionScreen';
import { MarketScreen } from '../features/market/MarketScreen';
import { ProfileScreen } from '../features/profile/ProfileScreen';

export type RootTabParamList = {
  Scan: undefined;
  Collection: undefined;
  Market: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const navTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

export function RootTabs(): JSX.Element {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator screenOptions={{ headerShown: true }}>
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Collection" component={CollectionScreen} />
        <Tab.Screen name="Market" component={MarketScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

