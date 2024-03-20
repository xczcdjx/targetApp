import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";
import {navigator} from "../constants";

const routes = createNativeStackNavigator({
    screens:{
        Login:{
            screen:Login,
            options:{
                statusBarBackgroundColor:navigator.background,
                statusBarHidden:true,
                autoHideHomeIndicator: true,
                headerStyle: {
                    backgroundColor: navigator.background,
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center'
            }
        },
        Home:{
            screen:Home,
            options:{
                headerShown:false,
                statusBarBackgroundColor:navigator.background,
                // statusBarTranslucent:true,
                statusBarHidden:true
            }
        },
    }
});
// 原始路由栈信息
/*function RootStack() {
    return <Stack.Navigator>
        <Stack.Screen name="Login"
                      options={{
                          // headerShown: false,
                          // statusBarStyle: 'dark',
                          statusBarBackgroundColor:'#0134e1',
                          navigationBarHidden: true,
                          autoHideHomeIndicator: true,
                          headerStyle: {
                              backgroundColor: '#0134e1',
                          },
                          headerTitleAlign: 'center',
                          headerTintColor: '#fff',
                      }}
                      component={Login}/>
        <Stack.Screen name="Home"
                      options={{
                          title: 'Home',
                          statusBarStyle: 'dark',
                          headerStyle: {
                              backgroundColor: '#0134e1',
                          },
                          headerTitleAlign: 'center',
                          headerTintColor: '#fff',
                          navigationBarHidden: true,
                          autoHideHomeIndicator: true
                      }}
                      component={Home}/>
    </Stack.Navigator>
}*/

export default routes
