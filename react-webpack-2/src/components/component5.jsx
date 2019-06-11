import React from 'react'
import cssobj from '@/css/index.scss'
export default function(props){
    const pBoxStyle = {color:'green',fontSize:'25px'};
    return <div className={cssobj.ContentBox} >
        <h2>{props.name}</h2>
        <p style={pBoxStyle} >{props.content}</p>
    </div>
}