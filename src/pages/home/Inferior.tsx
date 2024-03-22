import {Clipboard, Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {Component, FC, useState} from "react";
import SafeView from "@/layout/SafeView.tsx";
import {Button, Card, Icon, Input, Modal, Tab, TabBar} from "@ui-kitten/components";
import {GeneStyle} from "@/utils/style.ts";
import {Text as UText} from '@ui-kitten/components'
const ITargetData:ITargetProps[]=[
    ...Array(30).fill(0).map((_,i)=>({
        id:i+1,
        acc:'Millie Gregory'+i,
        num:Math.floor(Math.random()*1000+1),
        fb:'qwepoi'+i,
        youtube:'zxcvbnm'+(i+888)
    }))
]
class Duplicate extends Component{
    state={
        text:''
    }
    changeV=(v:any)=>{
        this.setState({
            text:v
        })
    }
    copy=async ()=>{
        Clipboard.setString(this.state.text)
        let str=await Clipboard.getString()
        console.log(str)
    }
    render() {
        return <View style={{padding:10}}>
            <Input value={this.state.text} onChangeText={this.changeV} multiline={true} size='large' textStyle={{minHeight:64}} placeholder={'hinthint'}/>
            <Button style={{marginTop:10}} onPress={this.copy} status={'primary'}>复制注册连接</Button>
        </View>
    }
}
const ITarget:FC<{d:ITargetProps[]}>=({d})=>{
    const keys=['acc','num','d1','d2']
    const [visible, setVisible] = React.useState(false);
    const sty=GeneStyle({
        con:{
            margin:10,
            height:500,
            // borderColor:'orange',
            // borderWidth:1
        },
        t:{
            height:40,
            padding:5,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            // justifyContent:'space-around',
        },
        scroll:{
            minHeight:420
        },
        tt1:{
            width:(Dimensions.get('window').width-20)/4,
            textAlign:'center'
        },
        ttb1:{
            padding:20,
            paddingTop:0,
            paddingBottom:0
        },
        t1:{
            backgroundColor:'#eee',
        },
        t2:{
            backgroundColor:'#f8f8f8'
        },
        modal:{
            height:200,
            width:200
        },
        modalClose:{
            width:25,
            height:25,
            position:'absolute',
            right:-15,
            top:-5
        },
        modelT:{
            marginTop:30
        }
    })
    const [accountD,setAccountD]=useState<Pick<ITargetProps, 'fb'|'youtube'>>({})
    const goDetail = (i:string|number,t:string) => {
        switch (t as 'd1'|'d2') {
            case "d1":
                setAccountD(d.find(it=>it.id===i)!)
                return setVisible(true)
            case "d2":

                return;
        }
    }
    return (
        <View style={sty.con}>
        <View style={[sty.t,sty.t1]}>
            {['平台账号','获得奖励','社群账号','日志'].map(((it,i)=>
                <Text style={sty.tt1} key={i}>{it}</Text>))}
        </View>
            <ScrollView style={sty.scroll}>
                {
                    d.map(it=><View key={it.id} style={[sty.t,sty.t2]}>
                        {Array.from({length:4}).map((_,i)=>
                            i>=2?<View style={[sty.tt1,sty.ttb1]}>
                                    <Button size='tiny' onPress={()=>goDetail(it.id,keys[i])}>详情</Button>
                                </View>:
                                // @ts-ignore
                                <Text numberOfLines={1} style={sty.tt1}>{it[keys[i]]} {i===1?'THB':''}</Text>
                        )}
                    </View>)
                }
            </ScrollView>
        <View style={[sty.t,sty.t1]}>
            <Text>总计：  {d.reduce((p,c)=>p+=c.num,0)} THB</Text>
        </View>
            <Modal
                visible={visible}
                backdropStyle={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}
                onBackdropPress={() => setVisible(false)}
            >
                <Card disabled={true} style={sty.modal}>
                    <Icon
                        style={sty.modalClose}
                        fill='#8F9BB3'
                        name='close-circle-outline'
                        onPress={()=>setVisible(false)}
                    />
                    <View style={sty.modelT}>
                        <UText status={'info'}>FB: </UText>
                        <Text numberOfLines={2}>{accountD.fb}</Text>
                    </View>
                    <View style={{marginTop:15}}>
                        <UText status={'info'}>youtube: </UText>
                        <Text numberOfLines={2}>{accountD.youtube}</Text>
                    </View>
                </Card>
            </Modal>
    </View>)
}
const InferiorMain = () => {
    const [barIndex,setBarIndex]=useState(0)
    const [targetArr,setTargetArr]=useState(ITargetData)
    const style=StyleSheet.create({
        main:{
          height:550
        },
        content:{
            marginTop:5,
        }
    })
    return (<View style={style.main}>
        <TabBar
            selectedIndex={barIndex}
            onSelect={index => setBarIndex(index)}
        >
            <Tab title='本日' />
            <Tab title='昨日' />
            <Tab title='本月' />
        </TabBar>
        <View style={style.content}>
            <ITarget d={targetArr}/>
        </View>
    </View>)
}
const Inferior = () => {
    return (
        <SafeView>
            <Duplicate/>
            <InferiorMain/>
        </SafeView>
    );
};
export default Inferior
