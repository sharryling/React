import React from '../../node_modules/react'
import cssObj from '@/css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

export default class Animal extends React.Component{
    constructor(){
        super()
        this.state = {
            msg:'I\'m comp3'
        }
    }
    render(){
        console.log("conponent3 ",this.state.msg);
        return <div id="COMP3" className={cssObj.class1} style={{color:'gray'}}> 
        this is component 3 -- {this.props.name} -- {this.props.age} -- {this.props.gender}
        {/* <button className={[bootcss.btn ,bootcss['btn-primary']].join(' ')}>button</button> */}
        <button className="btn btn-primary" onClick={()=>{this.show()}}>button</button>
        </div>
    }
    show(){
        console.log("onclick ing..")
    }
}