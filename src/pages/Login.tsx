import React from "react";
import {Button, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Login = () => {
    const navigate=useNavigation()
    return (
        <>
            <Text>111</Text>
            <Button title={'goHome'} onPress={()=>{
                // @ts-ignore
                navigate.popTo('Home')
            }}/>
        </>
    );
};
export default Login
