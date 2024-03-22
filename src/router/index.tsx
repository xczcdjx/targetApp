import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";
import {navigator} from "../constants";
import InferiorDetail from "../pages/Inferior/InferiorDetail.tsx";
const topBtn=(t:string)=>({
    title:t,
    navigationBarHidden: true,
    autoHideHomeIndicator: true,
    statusBarBackgroundColor:navigator.background,
    headerStyle: {
        backgroundColor: navigator.background,
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
})
const router = createNativeStackNavigator({
    initialRouteName:'Home',
    screens:{
        Login:{
            screen:Login,
            options:{
                ...topBtn('登录') as any
            }
        },
        Home:{
            screen:Home,
            options:{
                headerShown:false,
                statusBarBackgroundColor:navigator.background,
                // statusBarTranslucent:true,
                // statusBarHidden:true
            }
        },
        InferiorD:{
            screen:InferiorDetail,
            options:{
                ...topBtn('下级详情') as any
            }
        }
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

export default router
