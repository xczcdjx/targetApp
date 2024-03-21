import {createStaticNavigation} from "@react-navigation/native";
import * as eva from '@eva-design/eva';
import router from "./src/router";
import {ApplicationProvider} from "@ui-kitten/components";
// @ts-ignore
const Navigation = createStaticNavigation(router);
function App() {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Navigation/>
        </ApplicationProvider>
    );
}

export default App
