import React from "react";
import {Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Button} from "@ui-kitten/components";
import {useTranslation} from "react-i18next";
const Login = () => {
    const navigate=useNavigation()
    const { t, i18n } = useTranslation();
    return (
        <>
            <Text>{t('tit')}</Text>
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
