import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/authentication/login_screen';
import SignupScreen from '../screens/authentication/signup_screen';
import ForegotOtpScreen from '../screens/authentication/foregot_otp_screen';
import ForegotPasswordScreen from '../screens/authentication/foregot_password_screen';
import ChangePassword from '../screens/authentication/change_password';
import DrawerNavigation from '../navigation/drawer_navigation';
import HelpCenter from '../screens/help_page';
import ComplaintsPage from '../screens/complaints_page';
import PromosPage from '../screens/promos';
import SearchScreen from '../screens/search_screen';
import CartScreen from '../screens/cart_screen';
import ProductPage from '../screens/product_page';
import OrderPage from '../screens/orders_page';
import CategoryScreen from '../screens/category_screen';

const Stack = createNativeStackNavigator();

const SignupNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="ForegotOtpScreen"
        component={ForegotOtpScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="ForegotPasswordScreen"
        component={ForegotPasswordScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              HELP CENTER
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="ComplaintsPage"
        component={ComplaintsPage}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              COMPLAINTS
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="PromosPage"
        component={PromosPage}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              PROMOS
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              CART
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductPage"
        component={ProductPage}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="OrderPage"
        component={OrderPage}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default SignupNavigator;
