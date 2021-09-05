import React, { Component, Fragment } from 'react'
import './styles/styles.css'
import './styles/font-awesome.css'
import {connect} from 'react-redux'
import change_icon_number from "../../../Actions/Cart_Checkout_related/CartIconChanger";
import cartItemAdd  from "../../../Actions/Cart_Checkout_related/CartItemsAdd";


// do i need to evaluate here ? i need to evaluate where the icon shows, but i need to trigger the thing here 


class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            items:[],
            icon:"icon-heart-empty icon-large"
        };
        this.handleClick = this.handleClick.bind(this)
        
    }

    async componentDidMount(){
        if(this.props.url==undefined){
            console.log('filter#',this.props.filter)
            switch(this.props.filter){
                case 'Knife':{
                await fetch('http://ec2-18-118-61-96.us-east-2.compute.amazonaws.com/edda/store/Knife_Gallery/').then(res=>res.json()).then(
                (data)=>{console.log('knifes:',data);this.setState({items:data})})
                };break; 
                case 'Spoon':{           
                await fetch('http://ec2-18-118-61-96.us-east-2.compute.amazonaws.com/edda/store/Spoon_Gallery/').then(res=>res.json()).then(
                (data)=>{this.setState({items:data})})};break; 
                case 'Pan':{           
                    await fetch('http://ec2-18-118-61-96.us-east-2.compute.amazonaws.com/edda/store/Pan_Gallery/').then(res=>res.json()).then(
                    (data)=>{this.setState({items:data})})};break; 
                case 'Best':{
                    await fetch('http://ec2-18-118-61-96.us-east-2.compute.amazonaws.com/edda/store/Best/').then(res=>res.json()).then((data)=>{this.setState({items:data})})
                };break; 
                
                case 'latest':{
                    await fetch('http://ec2-18-118-61-96.us-east-2.compute.amazonaws.com/edda/store/Latest/').then(res=>res.json()).then((data)=>{this.setState({items:data})})
                };break; 

                default:{
                    await fetch('http://ec2-18-118-61-96.us-east-2.compute.amazonaws.com/edda/store/Collection_Gallery/').then(res=>res.json()).then(
                        (data)=>{this.setState({items:data})}
                    )
                }    
                }
    
    }
        else{
            console.log('CARD url value:',this.props.url)
            fetch(`${this.props.url}`).then(res=>res.json()).then(
                data=>{ this.setState({items:data});}
            )
        }
}

    handleClick(index,e){
        e.target.className=="icon-heart-empty icon-large"?e.target.className='fa fa-heart':e.target.className="icon-heart-empty icon-large"
        // here when the user clicks on the cart, i want to change two elements of redux state, the first is the number of items 
        // and the second is a list holds all of the objects the user clicked. 
        // adding +1 to items cart number 
        this.props.dispatch(change_icon_number('plus'))
        this.props.dispatch(cartItemAdd(this.state.items[index]))

    }

    render() {
        if(this.state.items.length===0){
            return(<Fragment></Fragment>)
        }
        
        else{
            let card = this.state.items.map((item,index)=>{
            return(
                <Fragment key={index}>
                <div  className='card'>
                    <div id="card-image-container">
                        <span id='heart'><i className={this.state.icon} onClick={this.handleClick}></i></span>
                        <span id='sale-badge'>{item.feature}</span>
                        <img id='card-img' src={item.image}/>
                    </div>
                    <div id='card-bottom'>
                        <button id='card-btn'><div id='btn-text'><span><i className='icon-bell'></i></span><span>Close</span></div></button>
                            <div id='card-texts'>
                                <div id='title-badge'>
                                    <h3 id='card-title'>{item.name}</h3>
                                    <span id='badge'>{item.feature}</span>
                                </div>
                                <p id='card-paragraph'>{item.description}</p>
                            </div>
                        <div id='cart'>
                            <span onClick={(e)=>this.handleClick(index,e)} id='add-to-cart'><i className='icon-shopping-cart'></i></span>
                            <span id='price'>{item.price}</span>
                        </div> 
                    </div>
                    <div id='social'>
                        <p>Follow ME</p>
                        <div id='social-links'>
                            <a href='https://www.facebook.com'><img src='./images/facebook-white.png'/></a>
                            <a href='https://www.twitter.com'><img src='./images/twitter-white.png'/></a>
                            <a href='https://www.google.com'><img src='./images/instagram-white.png'/></a>
                        </div>
                        <a id='email' href='mailto:youmail@hotmail.com'>Email</a>
                        </div>
                </div>           
                </Fragment>  
            )
            })
        return (
            <Fragment>
                {card}
            </Fragment>
            )
        }
    }
}

let mapStateTpProps=(state)=>({
    
})

export default  connect(mapStateTpProps)(Index);