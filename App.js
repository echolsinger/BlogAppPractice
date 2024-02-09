import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import React from 'react';
import { Provider } from './src/context/BlogContext'; /*have to use curly braces because it's not export default*/
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen
}, 
{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs' /*what appears in the app header*/
  }
});

const App = createAppContainer(navigator);

export default  () => {
  return (
  <Provider>
    <App/>
  </Provider>
  ); 
};

