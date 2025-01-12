import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './app/HomePage'; // Adjust the path if needed
import StartPage from './app/StartPage'; // Adjust the path if needed

// Create a stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Stack Navigator to manage navigation between screens */}
      <Stack.Navigator initialRouteName="StartPage">
        {/* StartPage screen */}
        <Stack.Screen 
          name="StartPage" 
          component={StartPage} 
          options={{ title: 'Diet Tracker' }} // Optional: Customize header title
        />
        
        {/* HomePage screen */}
        <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{ title: '' }} // Optional: Customize header title

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
