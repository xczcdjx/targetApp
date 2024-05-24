import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Button} from "@ui-kitten/components";
const accImg={
    Target:require('../../static/images/account/want.png')
}
const Account = () => {
    const unWant={
        t:'申请成为兼职',
        subT:'React Native brings the best parts of developing with React to native development. It\'s a best-in-class JavaScript library for building user interfaces.'
    }
    return (
        <View style={accS.con}>
            <Image source={accImg.Target} style={accS.img}/>
            <Text style={{
                marginTop:18,
                fontSize:25,
                fontWeight:'bold',
                color:'#000'
            }
            }>{unWant.t}</Text>
            <Text style={{
                padding:10,
                lineHeight:30,
                fontSize:18,
                color:'#999',
                textAlign:'justify',
            }}>{unWant.subT}</Text>
            <Button style={{
                width:100,
                marginTop:50
            }}>立即申请</Button>
        </View>
    );
};
const accS = StyleSheet.create({
    con:{
        backgroundColor:'#fff',
        height:Dimensions.get('window').height,
        display:"flex",
        alignItems:'center'
    },
    img: {
        width: Dimensions.get('window').width,
        padding: 10,
        minHeight: 200,
        /*borderColor: '#ddd',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'space-between'*/
    },
})
export default Account
