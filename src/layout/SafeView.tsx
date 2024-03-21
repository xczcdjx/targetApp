import {SafeAreaView, ScrollView} from "react-native";
import React, {ReactNode} from "react";
const SafeView = ({children}:{children:ReactNode}) => {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <ScrollView>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};
export default SafeView
