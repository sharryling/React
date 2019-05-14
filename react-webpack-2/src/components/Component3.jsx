import React from '../../node_modules/react'
import cssObj from '@/css/index.css'
export default class Animal extends React.Component{
    constructor(){
        super()
        this.state = {
            msg:'I\'m comp3'
        }
    }
    render(){
        console.log("conponent3 ",this.state.msg);
        return <div id="COMP3" className="class1" style={{border:'2px solid red'}}> this is component 3 -- {this.props.name} -- {this.props.age} -- {this.props.gender}</div>
    }
}