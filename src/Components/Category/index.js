import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import Card from '../Product_Cards_Holder/Card-product 2'
import './styles/styles.css'

class Index extends Component {
    constructor(props){
        super(props)        
        this.state={
            items:[],
            name:'',
        }
    }
componentDidMount(){
    // access the redux store here to find the link name (android,apple ...)
    // according to the name, fetch the date here and set the state of items accordingly 
    let category  = this.props.category
    this.setState({name:this.props.category})
}


render() {
            // make an object holding items here     
        if(this.state.name==''){return <div></div>}
            return (
                <div class='category-holder'>
                    <div className='category-holder-container'>
                    <h2>{this.state.name} Products</h2>
                        <div className='category-cards-holder'>
                        <Card filter={this.state.name}/>
                        </div>
                    </div>
                </div>
        )
    }
}

let mapStateToProps=(state)=>({
    category:state.SetCategory.category
})

export default connect(mapStateToProps)(Index); 