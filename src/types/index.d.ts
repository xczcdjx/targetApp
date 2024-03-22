import React from "react";

export {}
declare global{
    interface ITargetProps {
        id:string|number
        acc:string,
        num:number,
        fb?:string
        youtube?:string
    }
    type RCT={
        children:React.ReactNode
    }
}
