import {Dimensions, StyleSheet} from "react-native";
import NamedStyles = StyleSheet.NamedStyles;
const GeneStyle = <T>(style:NamedStyles<T> | NamedStyles<any>) => {
  return StyleSheet.create({
      ...style
  })
}
const GetWD=<T extends {width:number,height:number}>(t:'window' | 'screen'='window'):T=>{
    let d=Dimensions.get(t)
    return {width:d.width,height:d.height} as T
}
export {
    GeneStyle,GetWD
}
