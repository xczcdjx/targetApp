import * as React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Target from "./home/Target.tsx";
import Explain from "./home/Explain.tsx";
import Inferior from "./home/Inferior.tsx";
import Account from "./home/Account.tsx";
import {navigator} from "../constants";
const topBtn=(t:string)=>({
    headerRight: () => (
        <Text style={{color:'#fff',marginRight:15}} onPress={()=>{
            console.log(111)
        }}>语言</Text>
    ),
    title:t,
    navigationBarHidden: true,
    autoHideHomeIndicator: true,
    headerStyle: {
        backgroundColor: navigator.background,
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
})
const Home = createBottomTabNavigator({
    screenOptions: ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            // You can return any component that you like here!
            return <Text>11</Text>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
    }),
    screens: {
        Target:{
            screen:Target,
            options:{
                ...topBtn('任务') as any,
            }
        },
        Explain:{
            screen:Explain,
            options:{
                ...topBtn('说明') as any,
            }
        },
        Inferior:{
            screen:Inferior,
            options:{
                ...topBtn('下级') as any,
            }
        },
        Account:{
            screen:Account,
            options:{
                ...topBtn('我的') as any,
            }
        }
    },
});
export default Home
