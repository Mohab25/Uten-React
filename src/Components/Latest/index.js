import React, { Component,Fragment } from 'react'
import './styles/styles.css'
import {connect} from 'react-redux'
import setActiveLink from "../../Actions/NavActions/setActiveLink";


class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            items:[]
        };
        this.LatestRef = React.createRef(); 
        this.mapper = this.mapper.bind(this)
    }

    async componentDidMount(){
        await fetch('http://ec2-18-118-61-96.us-east-2.compute.amazonaws.com/edda/store/Latest/').then(res=>res.json()).then(
            (data)=>{
                this.setState({items:data});        
            }
        )
        // either to use await, or to call mapper inside the fetch data promise. 
        this.mapper() 
        // dispatching the position of this element from the window 
        let pos = this.LatestRef.current.getBoundingClientRect().y
        let ob = {'latest':pos}
        //this.props.dispatch(setActiveLink(ob))
    }

    mapper=()=>{
        /* what do i want to do? , so i want to set the images of the product according
        to the data on items array, i want to set all the other properties as well... 
        */
    }
    render() {
        if(this.state.items.length===0){
            return(
                <Fragment></Fragment>
            )
        }
        else{
        let item = this.state.items.map((item,index)=>
            <div key={index}>
                <div className='Latesbox'>
                    <h4 className='Latesbox-title'>{item.name}<p className='Phone-name'>{item.price}$</p></h4>
                    <p className='Latesbox-paragraph'>{item.description} </p>
                </div>
                <div className='Latesbox Latesbox-img'>
                    <div className='Latestbox-img-signs-container'>
                        <span className='Latestbox-img-info-sign'><i className='icon-info'></i></span>    
                        <span className='Latestbox-img-cart-sign'><i className='icon-shopping-cart'></i></span>    
                    </div>
                    <div style={{backgroundImage:`url('${item.image}')`}}className='Latesbox-image'></div>
                    <div className='Latesbox-image-text'>
                        <h6>{item.title}</h6>
                        <p>{item.description}</p> 
                    </div>
                    <span className='right-arrow'><i className='icon-chevron-right'></i></span>    
                
                </div>
            </div>
            
            )
        return (
            <Fragment>
                <div className='Latest-titles-container' id='latest' ref={this.LatestRef}>
                    <h1 className='Latest-section-title'>Latest Pieces </h1>
                    <h2 className='Latest-section-subtitle'>Check Out The Latest Items Shipped To Our Store </h2>
                </div>
                <div id='Lateswrapper'>
                    <div id='Latescontainer'>
                        {item}
                    </div>
                </div>
            </Fragment>
        )
        }
    }
}

let mapStateToProps=(state)=>({

})

export default connect(mapStateToProps)(Index)
