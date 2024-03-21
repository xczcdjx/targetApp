import React from "react";
import {Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Button} from "@ui-kitten/components";
const Login = () => {
    const navigate=useNavigation()
    return (
        <>
            <Text>111</Text>
            <Button onPress={()=>{
                // @ts-ignore
                navigate.popTo('Home')
            }}>
                goHome
            </Button>
        </>
    );
};
export default Login
