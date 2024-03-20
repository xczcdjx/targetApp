import {createStaticNavigation} from "@react-navigation/native";
import router from "./src/router";
const Navigation = createStaticNavigation(router);
function App() {
    return (
        // <NavigationContainer>
            <Navigation/>
        // </NavigationContainer>
    );
}

export default App
