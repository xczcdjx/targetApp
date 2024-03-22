import {Text} from "react-native";
import React from "react";

const TextPass = () => {
  return <>
      {Array.from({length:130}).map(((_,i)=><Text key={i}>111</Text>))}
  </>
}
export default TextPass
