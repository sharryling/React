import React from 'react'
import Component5 from '@/components/component5'
export default class Component4 extends React.Component {
    constructor() {
        super();
        this.state = {
            ArrObj: [{
                id: 1,
                name: 'zhangsan',
                content: 'hello'
            },
            {
                id: 2,
                name: 'zhangSi',
                content: 'hello world'
            },
            {
                id: 3,
                name: 'LuoMu',
                content: 'go die'
            }]
        }
    }
    render() {
        return <div><h1>I'm component4</h1>
            {this.state.ArrObj.map(item =><Component5 {...item} key={item.id}></Component5>)}
            <button onClick={()=>{this.show()}}>button</button>
        </div>
    }
    show=()=>{
        console.log(this.state.ArrObj)
        this.setState({
            showFlag:true
        },function(){
            console.log("gogo~")
        })
    }
}