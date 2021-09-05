import React, { Component, Fragment } from 'react'
import './styles/styles.css'





export default class index extends Component {
    constructor(props){
    super(props);
    this.state = {
        defaultActiveColor:'red',
        colorActive:'color active',
        colorHolder:<div></div>,
        gallery_items:[]
    }
    this.makeActive = this.makeActive.bind(this)
    this.colors = this.colors.bind(this)
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/components/GalleryItems/').then(res=>res.json()).then(
            (data)=>{this.setState({gallery_items:data})}
        )
    }

    makeActive(e){
        let c = e.target.getAttribute('color')
        this.colors(c)
        //this.setState({defaultActiveColor:''}) 

    }

    colors(addevalue){
        // changing the class active, for different colors. 
        console.log(addevalue)
        let colors = {'green':'#29b846','red':'#f84848','orange':'#ff5521','blue':'#2175f5','black':'#000'}
        let cclass=''
        let n = Object.keys(colors)
        let bing = n.map((i,index)=>{
             if(i==addevalue){
                 if (i!=this.state.defaultActiveColor){this.setState({defaultActiveColor:i})}
                 cclass = 'color active'
             }
             else{cclass='color'}
      return <span key={index} className={cclass} primary={colors[i]} color={i} onClick={this.makeActive}></span>
    })
    console.log(<div className='colors'>{bing}</div>)
    return <div className='colors'>{bing}</div>}
    
    
    render() {
        if(this.state.gallery_items.length==0){return <div></div>}
        return (
            <div className='Popup-Card'>
            <div className='Popup-Card-container'>
                <div className='Popup-Card-subcontainer'>
                    <div className='ProductBackground' style={{background:`url(${this.state.gallery_items[0].image})`}}>
                        <div className='gradients'>
                            <div className="gradient" color='blue'></div>
                            <div className="gradient first second" color='red'></div>
                            <div className="gradient" color='green'></div>
                            <div className="gradient" color='orange'></div>
                            <div className="gradient" color='black'></div>
                        </div>
                            
                            <a href='#' class='share'><i className='fafaicon'></i></a>
                        <img className='productImage' src={''} color='blue'/>
                        <img className="productImage show" src={''} color='red'/>
                        <img className='productImage' src={''} color='green'/>
                        <img className='productImage' src={''} color='orange'/>
                        <img className='productImage' src={''} color='black'/>
                    </div>

                    <div className='info'>
                        <div className='productName'>
                            <div>
                                <h1 className='big'>Nike Zoom KD12</h1>
                                <span>NEW</span>
                            </div>
                            <h4 className='small'>Men's running shoes</h4>
                        </div>
                        <div className='description'>
                            <h3 className='title'>PRODUCT INFO</h3>
                            <p className='text'>amco ex cupidatat irure excepteur elit cillum. Irure irure laborum consectetur sint culpa aliqua nostrud.
                            </p>
                        </div>
                        <div className='colors-container'>
                            <h3 className='title'>COLORS</h3>
                                {this.colors(this.state.defaultActiveColor)}
                        </div>
                        <div className='sizes-container'>
                            <h3 className='title'>SIZE</h3>
                            <div className='sizes'>
                                    <span className='size' >7</span>
                                    <span className='size' >8</span>
                                    <span className='size active' >9</span>
                                    <span className='size' >10</span>
                                    <span className='size' >11</span>
                            </div>
                        </div>
                        <div className='cart-price'>
                            <a className='add-to-cart' href='#'><i className='fafaicon'></i>Add to cart</a>
                            <h1 className='price'>$180.90</h1>
                        </div>
                    </div>
                </div>
        </div>

            </div>
        )
    }
}

