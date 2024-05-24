import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import { Button, Layout, MenuItem, OverflowMenu} from '@ui-kitten/components';
import {useTranslation} from "react-i18next";
import {changeLanguage, lngKey} from "../static/langs";
import storage from "@/utils/storage.ts";
export const LangSelect = (): React.ReactElement => {
    const [visible, setVisible] = React.useState(false);
    const {t,i18n}=useTranslation()
    const [lang,setLang]=useState<string[]>(['zh','en'])
    const [selectIndex,setSelectIndex]=useState({row:0})
    useEffect(() => {
        // setLang(i18n.languages as string[])
        // setLang(['zh','en'])
        storage.load({key:lngKey}).then(v=>{
            // console.log(v,1111112)
            setSelectIndex({row: lang.findIndex(it=>it===v)})
        })
    }, []);
    const renderToggleButton = (): React.ReactElement => (
        <Text style={{marginRight:15,color:'#fff'}} onPress={()=>setVisible(true)}>语言</Text>
    );
    const changeLang = (it:string,i:number) => {
        changeLanguage(it as any)
        setSelectIndex({row: i})
        setVisible(false)
    }
    return (
        <Layout
            style={styles.container}
            level='1'
        >
            <OverflowMenu
                visible={visible}
                anchor={renderToggleButton}
                selectedIndex={selectIndex as any}
                onBackdropPress={() => setVisible(false)}
            >
                {
                    lang.map((it,i)=> <MenuItem
                        key={it}
                        title={it}
                        onPress={()=>changeLang(it,i)}
                    />)
                }
            </OverflowMenu>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'transparent'
    },
});
