console.log("hello!~112");
import React from 'react'
import ReactDOM from 'react-dom'
//const myh1 = React.createElement('h1', null, 'this is a big H')
import Component2 from './components/Component2'
import Component3 from './components/Component3'

function Component1(props){
    return <div style={{color:'red',fontSize:"30px"}}>component1 <hr/> {props.name} -- {props.age} -- {props.gender} <hr/> 组件</div>
}

const Animal = {
    name : 'dog',
    age : 23,
    gender : 'girl'
}
const arrSrt = ['name1', 'name2', 'name3']
const nameArr = []
arrSrt.forEach(item => {
    const temp = <h5 key={item}>{item}</h5>
    nameArr.push(temp)
})
const myh2 = <div id="myh2">
    <h1 >googgo </h1>
    {nameArr.map(item => <div key={item.key}> {item} </div> )}
    <Component1 {...Animal}></Component1>
    <Component2 {...Animal}></Component2>
    <Component3 {...Animal}> </Component3>
</div>

ReactDOM.render(myh2, document.getElementById('app'))