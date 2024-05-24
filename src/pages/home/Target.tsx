import {Button, ScrollView, StatusBar, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Tab, TabBar} from "@ui-kitten/components";
import React, {useState} from "react";
interface BarProps {
    barIndex:number,setBarIndex:(n:number)=>void
}
export const TopTabBar = ({barIndex,setBarIndex}:BarProps): React.ReactElement => {
    return (
        <TabBar
            selectedIndex={barIndex}
            onSelect={index => setBarIndex(index)}
        >
            <Tab title='fb 520' />
            <Tab title='tiktop' />
        </TabBar>
    );
};
const Target = () => {
    const navigate=useNavigation() as any
    const [barIndex, setBarIndex] = useState(0);
    return (
        <View>
            <TopTabBar barIndex={barIndex} setBarIndex={setBarIndex}/>
            {barIndex===0?<ScrollView>
                {Array.from({length:10}).map((it,i)=><Text key={i}>{i}</Text>)}
                <Button title={'退出登录'} onPress={()=>navigate.popTo('Login')}/>
            </ScrollView>:<ScrollView>
                <Text>none</Text>
            </ScrollView>}
        </View>
    );
};
export default Target
