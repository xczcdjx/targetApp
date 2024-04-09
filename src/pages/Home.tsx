import * as React from 'react';
import {View, Text, Button, Alert, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Target from "./home/Target.tsx";
import Explain from "./home/Explain.tsx";
import Inferior from "./home/Inferior.tsx";
import Account from "./home/Account.tsx";
import {navigator} from "../constants";
import {LangSelect} from "@/components/LangSelect.tsx";
import {RenHeader} from "@/components/RenHeader.tsx";
const topBtn=(tit:string)=>{
    return {
        headerRight: () => (
            <LangSelect/>
        ),
        headerTitle:()=>RenHeader(tit),
        navigationBarHidden: true,
        autoHideHomeIndicator: true,
        headerStyle: {
            backgroundColor: navigator.background,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
    }
}
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
                ...topBtn('Target') as any,
            }
        },
        Explain:{
            screen:Explain,
            options:{
                ...topBtn('Explain') as any,
            }
        },
        Inferior:{
            screen:Inferior,
            options:{
                ...topBtn('Inferior') as any,
            }
        },
        Account:{
            screen:Account,
            options:{
                ...topBtn('Account') as any,
            }
        }
    },
});
export default Home
