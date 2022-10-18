/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View, } from 'react-native';
import { useCallback } from 'react';

function HomeScreen({navigation}) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity 
          onPress={onClick} 
          style={{
            padding: 15, 
            backgroundColor: 'black', 
            borderRadius: 5, 
            borderStyle: 'solid'
          }}>
        <Text style={{color: 'white'}}>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({navigation}) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity 
          onPress={onClick} 
          style={{
            padding: 15, 
            backgroundColor: 'black', 
            borderRadius: 5, 
            borderStyle: 'solid'
          }}>
        <Text style={{color: 'white'}}>Details Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen 
          name="Details"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;