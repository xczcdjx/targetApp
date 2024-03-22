import * as React from 'react';
import {View, Text, Button, Alert, Image} from 'react-native';
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
const iconImage:Record<string, any[]>={
    Target:[require('../static/images/target.png')],
    Explain:[require('../static/images/explain.png')],
    Inferior:[require('../static/images/inferior.png')],
    Account:[require('../static/images/account.png')],
}
const Home = createBottomTabNavigator({
    screenOptions: ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return <Image source={iconImage[route.name][0]}/>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'orange',
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
