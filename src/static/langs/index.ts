/**
 * 多语言配置文件
 */
import * as RNLocalize from "react-native-localize";
import i18next, {ModuleType} from "i18next";
import {initReactI18next} from "react-i18next";
import storage from "@/utils/storage.ts";
import RNRestart from 'react-native-restart';
export const lngKey =  '@lng';
const languageDetector = {
    type: 'languageDetector' as ModuleType,
    async: true,
    detect: function (callback:any) {
        // 获取上次选择的语言
        storage.load({key:lngKey}).then(lng => {
            // 如果是跟随本地，则获取系统语言
            if (lng === 'locale') {
                callback(getSystemLanguage());
            } else {
                callback(lng);
            }
        });
    },
};
// 初始化i18next配置
i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'zh', // 切换语言失败时的使用的语言
        debug: __DEV__, // 开发环境开启调试
        // 资源文件
        resources: {
            en: {
                translation: require('./loca/en.json'),
            },
            zh: {
                translation: require('./loca/cn.json'),
            },
        },
        react: {
            useSuspense: false,
        },
    });

export const getSystemLanguage = (): string => {
    const locales = RNLocalize.getLocales();
    return locales[0].languageCode;
};
export const changeLanguage = async (lng?: 'en' | 'zh' | 'locale') => {
    // 切换语言
    await i18next.changeLanguage(lng === 'locale' ? getSystemLanguage() : lng);
    // 持久化当前选择
    await storage.save({key:lngKey,data:lng});
    // RNRestart.Restart();
};
export default i18next;
