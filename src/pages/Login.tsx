import React, {useState} from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Button, Icon, IconElement, Input} from "@ui-kitten/components";
import {useTranslation} from "react-i18next";
import {TouchableWithoutFeedback} from "@ui-kitten/components/devsupport";
const Login = () => {
    const navigate=useNavigation()
    const [username,setUsername]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const toggleSecureEntry = (): void => {
        setSecureTextEntry(!secureTextEntry);
    };
    const renderIcon = (props:any): React.ReactElement => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableWithoutFeedback>
    );
    const renderCaption = (): React.ReactElement => {
        return (
            <View style={lS.captionContainer}>
                {AlertIcon(lS.captionIcon)}
                <Text style={lS.captionText}>
                    Should contain at least 8 symbols
                </Text>
            </View>
        );
    };
    const { t, i18n } = useTranslation();
    return (
        <View style={lS.container}>
            <ImageBackground resizeMode={'cover'}
                             style={lS.back}
                             source={require('../static/images/login/img.png')}>
                <View style={{
                    padding:30,
                    height:300,
                    display:'flex',
                    justifyContent:'space-around'
                }}>
                    <Text style={{
                        fontSize:25,
                        color:'#fff'
                    }}>{t('Login')}</Text>
                    <Input
                        value={username}
                        placeholder='Input your Account'
                        placeholderTextColor={'#fff'}
                        style={{
                            backgroundColor:'transparent',
                            color:'#000'
                        }}
                        onChangeText={nextValue => setUsername(nextValue)}
                    />
                    <Input
                        value={password}
                        placeholder='Input your Password'
                        placeholderTextColor={'#fff'}
                        accessoryRight={renderIcon}
                        style={{
                            backgroundColor:'transparent',
                        }}
                        secureTextEntry={secureTextEntry}
                        onChangeText={nextValue => setPassword(nextValue)}
                    />
                    <Button onPress={()=>{
                        // @ts-ignore
                        navigate.popTo('Home')
                    }}>
                        {t('Login')}
                    </Button>
                </View>
            </ImageBackground>
        </View>
    );
};
const AlertIcon = (props:any): IconElement => (
    <Icon
        {...props}
        name='alert-circle-outline'
    />
);

const lS=StyleSheet.create({
    container:{flex:1},
    back:{flex:1,justifyContent:'center'},
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    captionIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    captionText: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'opensans-regular',
        color: '#8F9BB3',
    },
})

export default Login
