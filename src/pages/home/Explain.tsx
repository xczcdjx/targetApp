import {Button, Dimensions, Image, StyleSheet, Text, View} from "react-native";
import {Text as UText} from "@ui-kitten/components";
import SafeView from "@/layout/SafeView.tsx";
import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {changeLanguage} from "../../static/langs";

type CardProps = {
    i: number,
    tit: string,
    content: string
}
const Card: FC<CardProps> = ({i, tit, content}) => {
    return (<View style={cardStyle.container}>
        <View>
            <UText category='h3'>
                <Text>0{i}</Text>
                <UText status='primary' category='h3'>{tit}</UText>
            </UText>
        </View>
        <View>
            <Text style={cardStyle.mid}>{content}</Text>
        </View>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={cardStyle.img}/>
    </View>)
}
const cardStyle = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        padding: 10,
        minHeight: 300,
        borderColor: '#ddd',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'space-between'
    },
    mid: {
        fontSize: 20,
        textAlign: 'justify'
    },
    img: {
        marginTop: 10,
        height: 200,
        borderRadius: 10
    }
})
const Explain = () => {
    const { t, i18n } = useTranslation();
    return (
        <SafeView>
            <Button title={t('tit')} onPress={()=>{
                changeLanguage('en')
            }}/>
            {Array.from({length: 5}).map(((_, i) =>
                <Card key={i} i={i + 1} tit={t('tit')}
                      content={'The JavaScript console is an essential tool for web development. Learn new and fun ways to use the console to display data and debug your'}/>))}
        </SafeView>
    );
};
export default Explain
