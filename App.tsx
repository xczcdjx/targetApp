import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/pages/Home.tsx";
import Target from "./src/pages/Target.tsx";

const Stack = createNativeStackNavigator();

function RootStack() {
    return <Stack.Navigator>
        <Stack.Screen name="Home"
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
                      component={Home}/>
        <Stack.Screen name="Target"
                      options={{
                          title: 'Target',
                          statusBarStyle: 'dark',
                          headerStyle: {
                              backgroundColor: '#0134e1',
                          },
                          headerTitleAlign: 'center',
                          headerTintColor: '#fff',
                          navigationBarHidden: true,
                          autoHideHomeIndicator: true
                      }}
                      component={Target}/>
    </Stack.Navigator>
}

function App() {
    return (
        <NavigationContainer>
            <RootStack/>
        </NavigationContainer>
    );
}

export default App
