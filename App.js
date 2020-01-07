import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import Color from './constants/colors'


const navigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'HomeScreen',
      headerStyle: {backgroundColor: Color.appThemeColor},
      headerTitleStyle: {color: 'white'}
    }
  })

  export default createAppContainer(navigator)
