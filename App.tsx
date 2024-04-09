import {createStaticNavigation} from "@react-navigation/native";
import * as eva from '@eva-design/eva';
import router from "./src/router";
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import './src/static/langs'
// @ts-ignore
const Navigation = createStaticNavigation(router);
function App() {
    return (<>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
            <Navigation/>
        </ApplicationProvider>
        </>
    );
}

export default App
