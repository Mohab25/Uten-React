import React, { Component } from 'react'
import './styles/styles.css'

export default class Features extends Component {
    constructor(props){
        super(props);
        this.state={
            values:['Best Prices','Speed','Trust'],
            icons:['fa fa-money fa-2x','fa fa-tachometer fa-2x','fa fa-thumbs-up fa-2x']
        }
    }
    render() {
        let feat_content=[]
        for(let i=0;i<=2;i++){
        feat_content.push(
         <div className='col' key={i}>
            <div className='feature-txt'>
                <h4><i className={this.state.icons[i]}></i>{this.state.values[i]}</h4>
                <p>Aliquip aliqua veniam enim fugiat tempor exercitation pariatur voluptate enim dolor.
                Consequat elit enim pariatur reprehenderit tempor cupidatat eu consectetur nisi. 
                </p>
            </div>
        </div>)}
        return (
            <div id='Features'>
                <div className='Features-title-container'>
                    <h1 className='Features-title'>Things We Think Of As Our Values</h1>
                </div>
                <div id='row'>
                  {feat_content}  
                </div>
            </div>
            )
        }
    
}
