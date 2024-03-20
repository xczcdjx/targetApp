import {Button, ScrollView, StatusBar, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Target = () => {
    const navigate=useNavigation() as any
    return (
        <View>
            <StatusBar backgroundColor={'#0134e1'}></StatusBar>
            <ScrollView>
                {Array.from({length:100}).map((it,i)=><Text key={i}>{i}</Text>)}
                <Button title={'退出登录'} onPress={()=>navigate.popTo('Login')}/>
            </ScrollView>
        </View>
    );
};
export default Target
