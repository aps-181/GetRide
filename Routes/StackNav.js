import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen"
import FirstScreen from "../screens/FirstScreen"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import UserFirstScreen from "../screens/UserFirstScreen"
import RouteScreen from "../screens/RouteScreen";
import UserScreen from "../screens/UserScreen";
import UserSScreen from "../screens/UserSScreen";
import showRides from "../screens/showRides";
const screens = {
    FirstScreen: {
        screen: FirstScreen,
        navigationOptions: { headerShown: false }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: { headerShown: false }
    },

    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: { headerShown: false }
    },
    RegisterScreen: {
        screen: RegisterScreen,
        navigationOptions: { headerShown: false }
    },
    UserFirstScreen: {
        screen: UserFirstScreen,
        navigationOptions: { headerShown: false }
    },
    RouteScreen: {
        screen: RouteScreen,
        // navigationOptions: () => ({
        //     title: '',
        //     // headerStyle: styles.headerStyle,
        //     headerTitle: <Text></Text>,
        //     // headerLeft: null,
        //     // headerRight: null,
        // })
        navigationOptions: { headerShown: false }

    },
    UserScreen: {
        screen: UserScreen,
        navigationOptions: { headerShown: false }
    },
    UserSScreen: {
        screen: UserSScreen,
        navigationOptions: { headerShown: false }
    },
    showRides: {
        screen: showRides,
        navigationOptions: { headerShown: false }
    }

}
const StackNav = createStackNavigator(screens);
export default createAppContainer(StackNav);


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
// import { Provider } from 'react-redux';
// import { store } from '../store';
// // import HomeScreen from './screens/HomeScreen';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import MapScreen from './screens/MapScreen';
// export default function StackNav() {
//     const Stack = createNativeStackNavigator();

//     return (
//         <Provider store={store}>
//             <NavigationContainer>
//                 <SafeAreaProvider>
//                     <KeyboardAvoidingView
//                         behavior={Platform.OS === "ios" ? "padding" : "height"}
//                         style={{ flex: 1 }}>
//                         <Stack.Navigator>
//                             <Stack.Screen
//                                 name='FirstScreen'
//                                 component={FirstScreen}
//                                 options={{
//                                     gestureEnabled: true
//                                 }}

//                             />
//                             <Stack.Screen
//                                 name='HomeScreen'
//                                 component={HomeScreen}
//                                 options={{
//                                     headerShown: false,
//                                     gestureEnabled: true
//                                 }}

//                             />

//                             <Stack.Screen
//                                 name='LoginScreen'
//                                 component={LoginScreen}
//                                 options={{
//                                     headerShown: false,
//                                     gestureEnabled: true
//                                 }}

//                             />
//                             <Stack.Screen
//                                 name='RegisterScreen'
//                                 component={RegisterScreen}
//                                 options={{
//                                     headerShown: false,
//                                     gestureEnabled: true
//                                 }}

//                             />
//                             <Stack.Screen
//                                 name='UserFirstScreen'
//                                 component={UserFirstScreen}
//                                 options={{
//                                     headerShown: false,
//                                     gestureEnabled: true
//                                 }}

//                             />
//                             <Stack.Screen
//                                 name='RouteScreen'
//                                 component={RouteScreen}
//                                 options={{
//                                     headerShown: false,
//                                     gestureEnabled: true
//                                 }}

//                             />

//                         </Stack.Navigator>
//                     </KeyboardAvoidingView>
//                 </SafeAreaProvider>
//             </NavigationContainer>
//         </Provider>
//     );
// }