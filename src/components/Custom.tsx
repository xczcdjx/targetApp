import {Text} from "@ui-kitten/components";
import {TextProps} from "@ui-kitten/components/ui/text/text.component";
const UText=(props:TextProps)=>{
    return <Text {...props}>{props.children}</Text>
}

export {
    UText
}
