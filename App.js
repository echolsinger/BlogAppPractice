import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import React from 'react';
import { Provider } from './src/context/BlogContext'; /*have to use curly braces because it's not export default*/


const navigator = createStackNavigator({
  Index: IndexScreen
}, {
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

