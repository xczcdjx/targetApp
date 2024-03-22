import {StyleSheet} from "react-native";
import NamedStyles = StyleSheet.NamedStyles;
const GeneStyle = <T>(style:NamedStyles<T> | NamedStyles<any>) => {
  return StyleSheet.create({
      ...style
  })
}
export {
    GeneStyle
}
