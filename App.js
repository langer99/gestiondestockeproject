import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, AntDesign, Entypo } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

// Import des composants des différentes pages
import ProduitScreen from './Screen/ProduitScreen';
import SensorsScreen from './Screen/SensorsScreen';
import AddScreen from './Screen/AddScreen';
import GatewayScreen from './Screen/GatewayScreen';
import StatisticScreen from './Screen/StatisticScreen';
import addproduitApp from './add/AddProduit';
import addgatewayApp from './add/AddGateway';
import addsensorApp from './add/AddSensor';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Produit"
          component={ProduitScreen}
          options={({ navigation }) => ({
            tabBarIcon: ({ color, size }) => (
              <Feather name="box" size={size} color={color} />
            ),
          })}
        />
        <Tab.Screen
          name="Sensors"
          component={SensorsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="signal" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="plus" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Gateway"
          component={GatewayScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="USB" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Statistic"
          component={StatisticScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="barchart" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const AddStackScreen = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen
      name="AddProduit"
      component={addproduitApp}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <Feather name="box" size={size} color={color} />
        ),
      })}
    />
    <Tab.Screen
      name="AddSensor"
      component={addsensorApp}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="signal" size={size} color={color} />
        ),
      }}
    />
   
    <Tab.Screen
      name="AddGateway"
      component={addgatewayApp}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="USB" size={size} color={color} />
        ),
      }}
    />
   
  </Tab.Navigator>
  );
};

export default App;
