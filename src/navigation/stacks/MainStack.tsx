import * as React from 'react'
import { MapScreen } from '../../screens/MapScreen/MapScreen'
import { LoginScreen } from '../../screens/LoginScreen/LoginScreen'
import { FisrtSignUpScreen } from '../../screens/SignUp/FirstSignUpScreen'
import { SecondSignUpScreen } from '../../screens/SignUp/SecondSignUpScreen'
import { SuccessSignUpScreen } from '../../screens/SignUp/SuccessSignUpScreen'
import { ThirdSignUpScreen } from '../../screens/SignUp/ThirdSignUpScreen'
import { CheckoutScreen } from '../../screens/CheckoutScreen/CheckoutScreen'


export const ScreensMainStack = 'screens.main.stack'

export const MainStackScreenNames = {
  MapScreen: 'MapScreen', 
  MainScreen: 'MainScreen',
  LoginScreen: 'LoginScreen',
  FisrtSignUpScreen: 'FisrtSignUpScreen',
  SecondSignUpScreen: 'SecondSignUpScreen',
  ThirdSignUpScreen: 'ThirdSignUpScreen',
  SuccessSignUpScreen: 'SuccessSignUpScreen',
  CheckoutScreen: 'CheckoutScreen',
}

const MainStack = (Stack: any) => [
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.MapScreen}`}
    name={MainStackScreenNames.MapScreen}
    component={MapScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.LoginScreen}`}
    name={MainStackScreenNames.LoginScreen}
    component={LoginScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
  key={`${ScreensMainStack}${MainStackScreenNames.CheckoutScreen}`}
  name={MainStackScreenNames.CheckoutScreen}
  component={CheckoutScreen}
  options={{
    headerShown: false,
  }}
/>,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.FisrtSignUpScreen}`}
    name={MainStackScreenNames.FisrtSignUpScreen}
    component={FisrtSignUpScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.SecondSignUpScreen}`}
    name={MainStackScreenNames.SecondSignUpScreen}
    component={SecondSignUpScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.ThirdSignUpScreen}`}
    name={MainStackScreenNames.ThirdSignUpScreen}
    component={ThirdSignUpScreen}
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key={`${ScreensMainStack}${MainStackScreenNames.SuccessSignUpScreen}`}
    name={MainStackScreenNames.SuccessSignUpScreen}
    component={SuccessSignUpScreen}
    options={{
      headerShown: false,
    }}
  />,
]

export default MainStack