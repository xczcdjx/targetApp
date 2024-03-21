import {Clipboard, Text, View} from "react-native";
import {Component} from "react";
import SafeView from "@/layout/SafeView.tsx";
import {Button, Input} from "@ui-kitten/components";
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
const Inferior = () => {
    return (
        <SafeView>
            <Duplicate/>
        </SafeView>
    );
};
export default Inferior
