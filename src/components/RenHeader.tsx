import {useTranslation} from "react-i18next";
import * as React from "react";
import {Text} from "react-native";
export function RenHeader(tit:string) {
    const {t}=useTranslation()
    return <Text style={{color:'#fff',fontSize:20}}>{t(tit)}</Text>
}
