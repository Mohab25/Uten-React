import React, { Component, Fragment } from 'react'
import './styles/styles.css'
import Gallery2 from './Gallery2'


export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            items:[1]
        }
    }
    render() {
        return (
            <Fragment>
                <div id='first_container'>
                    <Gallery2/>
                </div>
                <div id='second_container'>
                    <Gallery2/>
                </div>
            </Fragment>
        )
    }
}
