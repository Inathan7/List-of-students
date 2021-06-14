import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import StudentDetailsScreen from './screens/StudentDetailsScreen';

export default class App extends React.Component {

  render() {
    return (
      <StackNavigator/>
    );
  }
}

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    StudentDetails: StudentDetailsScreen,
  },{
    initialRouteName: 'Home',
    navigationOptions: {
      headerTransparent: true,
    },
  }
);