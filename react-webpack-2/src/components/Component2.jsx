import React from '../../node_modules/react'
import cssObj from '@/css/index.scss'
console.log(cssObj);

export default function Comonent2(props){ 
    console.log(props);
    return <div className={cssObj.class2} >component2 <hr/> {props.name} -- {props.age} -- {props.gender} <hr/> 组件</div>
}