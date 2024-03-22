import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {Datepicker, Icon, IndexPath, Select, SelectItem} from "@ui-kitten/components";
import React, {useState} from "react";
import {UText} from "@/components/Custom.tsx";

type InferiorD = { id: string, t: string, d: string, v: number }
const InferiorDetail = () => {
    const route = useRoute()
    console.log(route.params)
    const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>();
    const [date, setDate] = React.useState(new Date());
    const [record, setRecord] = useState<InferiorD[]>([
        {d: "3/11", id: "1", t: "绑定fb账号", v: 0},
        {d: "3/12", id: "2", t: "执行FB发布任务", v: 0},
        {d: "3/14", id: "3", t: "完成FB发布任务", v: 5},
        {d: "3/18", id: "4", t: "执行FB发布任务", v: 0},
        {d: "3/18", id: "5", t: "完成FB发布任务", v: 10},
    ])
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Select
                    style={styles.select}
                    placeholder='Active'
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}
                >
                    <SelectItem title='Option 1'/>
                    <SelectItem title='Option 2'/>
                    <SelectItem title='Option 3'/>
                </Select>
                <Datepicker
                    style={styles.select}
                    placeholder='Pick Date'
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                    accessoryRight={<Icon
                        name='calendar'
                    />}
                />
            </View>
            <ScrollView style={{height:500}}>
                {record.map(it =>
                    <View key={it.id} style={styles.mid}>
                        <Text>{it.d} </Text>
                        <Text>{it.t} {it.v?<UText status='danger'> +{it.v}</UText>:<></>}</Text>
                    </View>
                )}
            </ScrollView>
            <View style={styles.bot}>
                <UText status='danger' category={'h5'}>总计: +{record.reduce((p,c)=>p+c.v,0)}</UText>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        backgroundColor: '#fff'
    },
    top: {
        marginTop: 5,
        flexDirection: 'row',
    },
    mid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth:1,
        borderBottomColor:'#eee',
    },
    select: {
        flex: 1,
        marginHorizontal: 2,
    },
    bot:{
        height:60,
        width:Dimensions.get('window').width,
        backgroundColor:'#fde8e8',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        left:0,
        bottom:56
    }
});
export default InferiorDetail
