import React from '../../node_modules/react'

export default function Comonent2(props){
    console.log(props);
    return <div>component2 <hr/> {props.name} -- {props.age} -- {props.gender} <hr/> 组件</div>
}