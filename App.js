import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Button, Text } from 'react-native';

// Import des composants des différentes pages
import ProduitScreen from './ProduitScreen';
import SensorsScreen from './SensorsScreen';
import GatewayScreen from './GatewayScreen';
import StatisticScreen from './StatisticScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Produit" component={ProduitScreen} />
        <Tab.Screen name="Sensors" component={SensorsScreen} />
        <Tab.Screen name="Gateway" component={GatewayScreen} />
        <Tab.Screen name="Statistic" component={StatisticScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
