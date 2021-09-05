import React, { Component,Fragment } from 'react'
import Card from './Card-product 2'
import './styles/styles.css'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import set_category from "../../Actions/category_related/set_category";

class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            cards:[1]
        }
        this.iconfinder = this.iconfinder.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    iconfinder(){
        switch(this.props.filter){
            case 'Samsung':return <i className='fa fa-android'></i>
            case 'Apple':return <i className='fa fa-apple'></i>
            case 'Huawei':return <i className='fa fa-phone'></i>
            default: return this.props.filter 
        }
    }
    handleClick(e){
        let category_name = this.props.filter  // this is a prop coming from home page 
        this.props.dispatch(set_category(category_name))
    }
    // within the link click, use a redux state that changes accordingly...
    render() {
        let cards = this.state.cards.map((card,index)=>
        <div className='card-holder' key={index} >
            <Card filter={this.props.filter}/>
        </div>)
        return (
            <div className='cards-main-container'>
                <div className='cards-holder'>
                    {cards}
                </div>
                <div className='cards-btn-container'>
                    <Link onClick={this.handleClick} to={{pathname:'/category',state:{'name':'binga'}}}><button className='btn-filter'>See all {this.iconfinder()} </button></Link>
                </div>
            </div>
        )
    }
}

let mapStateToProps=(state)=>({
    
})


export default connect(mapStateToProps)(Index); 